import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    email: "",
    name: "",
  },
});

export const AuthWrapper = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {
      email: "",
      name: "",
    },
  });

  const [appLoading, setAppLoaing] = useState(true);
  // ...
  return (
    <AuthContext.Provider value={{ auth, setAuth, appLoading, setAppLoaing }}>
      {props.children}
    </AuthContext.Provider>
  );
};
