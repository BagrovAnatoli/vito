import './App.scss';
// import { Routes, Route } from 'react-router-dom';
import {
  useRoutes,
} from 'react-router-dom';
import MainPage from './pages/main';
import ProfilePage from './pages/profile';
import NotFound from './pages/notFound';

export default function App() {
  const element = useRoutes([
    { path: '/', element: <MainPage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
}
