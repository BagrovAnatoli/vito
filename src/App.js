import './App.scss';
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

export default function App() {
  return (
    <Routes>
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/seller-profile/:id" element={<SellerProfilePage />} />
      <Route element={<ProtectedRoute redirectedPath="/" isAllowed />}>
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
