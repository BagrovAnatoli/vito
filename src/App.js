import './App.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
// import {
//   useRoutes,
// } from 'react-router-dom';
import MainPage from './pages/main';
import ArticlePage from './pages/article';
import ProfilePage from './pages/profile';
import SellerProfilePage from './pages/sellerProfile';
import NotFound from './pages/notFound';
import auth from './utils/auth';
import { refresh } from './store/actions/thunks/auth';
import { getCurrentUser } from './store/actions/thunks/users';
import { authUserEmailSelector, accessTokenSelector, refreshTokenSelector } from './store/selectors/auth';

export default function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(auth.check());
  const userEmail = useSelector(authUserEmailSelector);
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);

  useEffect(() => {
    if (userEmail && accessToken && refreshToken) {
      auth.on(userEmail, accessToken, refreshToken);
      setIsAuth(auth.check());
    } else if (isAuth) {
      dispatch(refresh({ accessToken, refreshToken }));
      dispatch(getCurrentUser());
    }
  }, [userEmail, accessToken, refreshToken, isAuth]);

  return (
    <Routes>
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/seller-profile/:id" element={<SellerProfilePage />} />
      <Route element={<ProtectedRoute redirectedPath="/" isAllowed={isAuth} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  // const element = useRoutes([
  //   { path: '/', element: <MainPage /> },
  //   { path: '/profile', element: <ProfilePage /> },
  //   { path: '*', element: <NotFound /> },
  // ]);
  // return element;
}
