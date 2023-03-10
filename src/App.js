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
import { AuthContext } from './authContext';
// import cookies from './utils/cookies';
import { refresh } from './store/actions/thunks/auth';
import { accessTokenSelector, refreshTokenSelector } from './store/selectors/auth';

export default function App() {
  const [isAuth, setIsAuth] = useState(auth.check());

  const dispatch = useDispatch();
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);

  useEffect(() => {
    console.log('useEffect [accessToken, refreshToken, isAuth]');
    console.log(`accessToken ${accessToken}`);
    console.log(`refreshToken ${refreshToken}`);
    if (accessToken && refreshToken) {
      console.log('accessToken && refreshToken');
      auth.on(accessToken, refreshToken);
      setIsAuth(auth.check());
    } else if (isAuth) {
      dispatch(refresh({ accessToken, refreshToken }));
    }
  }, [accessToken, refreshToken, isAuth]);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Routes>
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/seller-profile/:id" element={<SellerProfilePage />} />
        <Route element={<ProtectedRoute redirectedPath="/" isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
  // const element = useRoutes([
  //   { path: '/', element: <MainPage /> },
  //   { path: '/profile', element: <ProfilePage /> },
  //   { path: '*', element: <NotFound /> },
  // ]);
  // return element;
}
