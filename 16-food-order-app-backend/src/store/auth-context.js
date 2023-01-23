import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  accountId: "",
  email: "",
  login: () => {},
  logout: () => {},
});

export default AuthContext;
