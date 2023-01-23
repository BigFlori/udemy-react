import React, { useReducer, useEffect } from "react";
import AuthContext from "./auth-context";

const defaultAuthState = {
  isLoggedIn: false,
  accountId: "",
  email: "",
};

const authReducer = (state, action) => {
  console.log(action);
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: true,
      accountId: action.accountInfo.id,
      email: action.accountInfo.email,
    };
  }
  if (action.type === "LOGOUT") {
    return defaultAuthState;
  }
  if (action.type === "RESTORE") {
    return action.storedState;
  }
  return defaultAuthState;
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  useEffect(() => {
    const storedState = {
      isLoggedIn: localStorage.getItem("isLoggedIn") === "1" ? true : false,
      accountId: localStorage.getItem("accountId"),
      email: localStorage.getItem("email"),
    };
    dispatch({ type: "RESTORE", storedState });
  }, []);

  const loginHandler = (accountId, email) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("accountId", accountId);
    localStorage.setItem("email", email);
    dispatch({
      type: "LOGIN",
      accountInfo: {
        id: accountId,
        email,
      },
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accountId");
    localStorage.removeItem("email");
    dispatch({ type: "LOGOUT" });
  };

  const authContext = {
    isLoggedIn: state.isLoggedIn,
    accountId: state.accountId,
    email: state.email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
