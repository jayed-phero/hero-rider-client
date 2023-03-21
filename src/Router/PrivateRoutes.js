import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    console.log(user)
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }

    if (user && user.uid) {
        return children
    }

    return <Navigate to='/signin' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;