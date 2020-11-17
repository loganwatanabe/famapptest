import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //https://blog.logrocket.com/how-to-set-up-email-authentication-with-react-native-react-navigation-and-firebase/
  //changing the login/logout for simple flow
  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        login: async (email, password) => {
        	console.log("login")
        	setUser("123")
        },
        logout: async () => {
        	console.log("logout")
        	setUser(null)
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};