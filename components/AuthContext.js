'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ jwt: null, user: null });

  useEffect(() => {
    // Ensure localStorage is accessed only on client-side
    const jwt = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (jwt && user) {
      setAuthState({ jwt, user });
    }
  }, []);

  const login = (jwt, user) => {
    setAuthState({ jwt, user });
    localStorage.setItem('token', jwt);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuthState({ jwt: null, user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
