import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const RegisterForm = (props) => {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const emailChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const usernameChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const confirmPasswordChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, confirmPassword: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input);

    setInput({ email: "", username: "", password: "", confirmPassword: "" });
  };

  const formChangeHandler = (event) => {
    setInput({ email: "", username: "", password: "", confirmPassword: "" });
    props.onFormChange(event);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <Input type='email' onChange={emailChangeHandler} value={input.email}>
            E-mail cím
          </Input>
          <Input
            type='text'
            onChange={usernameChangeHandler}
            value={input.username}
          >
            Felhasználónév
          </Input>
          <Input
            type='password'
            onChange={passwordChangeHandler}
            value={input.password}
          >
            Jelszó
          </Input>
          <Input
            type='password'
            onChange={confirmPasswordChangeHandler}
            value={input.confirmPassword}
          >
            Jelszó újra
          </Input>
          <div className={styles.buttonContainer}>
            <Button type='submit' className={styles.button}>
              Regisztráció
            </Button>
          </div>
        </form>
      </div>
      <p>
        Mégsem, <span onClick={formChangeHandler}>vissza a belépéshez</span>
      </p>
    </React.Fragment>
  );
};

export default RegisterForm;
