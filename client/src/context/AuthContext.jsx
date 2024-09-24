import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      setMessage('Vous avez été déconnecté.');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setMessage('Vous avez été déconnecté.');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;