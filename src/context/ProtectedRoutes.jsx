import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Loader from '../components/Loader';

const ProtectedRoutes = () => {
  const { isAdminAuthenticated, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("loadstate", loading)

  if (loading) {
    return <Loader/>; // Show a loading state while checking auth
  }

  return isAdminAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};


export default ProtectedRoutes;
