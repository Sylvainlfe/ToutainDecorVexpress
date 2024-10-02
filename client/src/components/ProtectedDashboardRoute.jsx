import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedDashboardRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/LoginPage" replace />;
  }

  return children;
}

export default ProtectedDashboardRoute;