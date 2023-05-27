/* eslint-disable react/jsx-no-constructed-context-values */
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
import { AuthContext } from './contexts';
// import cookies from './utils/cookies';
import { refresh } from './store/actions/thunks/auth';
import { accessTokenSelector, refreshTokenSelector } from './store/selectors/auth';
import cookies from './utils/cookies';

export default function App() {
  const [isAuth, setIsAuth] = useState(auth.check());

  const dispatch = useDispatch();
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);
  console.log('=======App=======');
  console.log(`accessToken ${accessToken}`);
  console.log(`refreshToken ${refreshToken}`);

  // const dispatchRefresh = async () => {
  //   await dispatch(refresh({ accessToken, refreshToken }));
  //   console.log(`refresh accessToken ${accessToken}`);
  //   console.log(`refresh refreshToken ${refreshToken}`);
  // };

  useEffect(() => {
    console.log('useEffect [accessToken, refreshToken, isAuth]');
    console.log(`accessToken ${accessToken}`);
    console.log(`refreshToken ${refreshToken}`);
    console.log(`isAuth ${isAuth}`);
    if (accessToken && refreshToken) {
      console.log('accessToken && refreshToken');
      auth.on(accessToken, refreshToken);
      setIsAuth(auth.check());
    } else if (isAuth) {
      const accessFromCookies = cookies.read('access_token');
      const refreshFromCookies = cookies.read('refresh_token');
      dispatch(refresh({ accessToken: accessFromCookies, refreshToken: refreshFromCookies }));
      // dispatchRefresh();
    }
  }, [accessToken, refreshToken, isAuth]);

  const logoutContext = () => setIsAuth(auth.check());

  return (
    <AuthContext.Provider value={{ isAuth, logoutContext }}>
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
}
