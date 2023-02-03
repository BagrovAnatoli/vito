import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ redirectedPath = '/', isAllowed }) {
    if (!isAllowed) {
        return <Navigate to={redirectedPath} replace />;
    }

    return <Outlet />;
}
