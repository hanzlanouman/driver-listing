'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    jwt: null,
    user: null,
    role: null,
  });

  useEffect(() => {
    // Ensure localStorage is accessed only on client-side
    const jwt = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const role = JSON.parse(localStorage.getItem('role'));
    if (jwt && user && role) {
      setAuthState({ jwt, user, role });
    }
  }, []);

  const login = (jwt, user, role) => {
    setAuthState({ jwt, user, role });
    localStorage.setItem('token', jwt);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', JSON.stringify(role));
  };

  const logout = () => {
    setAuthState({ jwt: null, user: null, role: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
