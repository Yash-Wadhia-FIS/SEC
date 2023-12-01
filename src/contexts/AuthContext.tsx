import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios'; 
import {signUp } from "../../http/apiCollection"

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string, type: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => { },
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username: string, password: string, type: string) => {
    try {
      const response = await axios.post(signUp, {
        username,
        password,
        type,
      });

      if (response.status === 200) {
        console.log('Credentials are correct. Setting isAuthenticated to true.');
        const { accessToken, username } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('username', username);
        setIsAuthenticated(true);

        return response.data;
      } else {
        console.log('Credentials are incorrect.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
 
  if (!context) {
    console.warn('useAuth used outside of AuthProvider. Returning default values.');
    return { isAuthenticated: false, login: () => Promise.resolve(), logout: () => { } };
  }

  return context;
};

export { AuthProvider, useAuth, AuthContext };
