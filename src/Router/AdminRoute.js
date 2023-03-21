import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext, { AuthProvider } from '../Context/AuthContext';
import useAdmin from '../hooks/useAdmin';
import Spinner from '../Shared/Spinner/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner/>
    }

    if (user?.uid && isAdmin) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;