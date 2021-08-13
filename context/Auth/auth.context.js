import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        onLogin: () => setIsAuth(true),
        onLogout: () => setIsAuth(false),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
