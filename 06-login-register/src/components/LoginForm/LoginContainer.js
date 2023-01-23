import React, { useState } from "react";
import styles from "./LoginContainer.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginContainer = (props) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const formChangeHandler = (event) => {
    event.preventDefault();

    if (showLoginForm) {
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
    }
  };

  return (
    <div className={styles.container}>
      <h3>StudyProject v1</h3>
      {showLoginForm ? (
        <LoginForm onFormChange={formChangeHandler} />
      ) : (
        <RegisterForm onFormChange={formChangeHandler} />
      )}
    </div>
  );
};

export default LoginContainer;
