import Button from "../UI/Button";
import React, { useState } from "react";
import Input from "../UI/Input";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input);

    setInput({ username: "", password: "" });
  };

  const formChangeHandler = (event) => {
    setInput({ username: "", password: "" });
    props.onFormChange(event);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
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
          <div className={styles.buttonContainer}>
            <Button type='submit' className={styles.button}>
              Bejelentkezés
            </Button>
          </div>
        </form>
      </div>
      <p>
        Nem rendelkezel felhasználói fiókkal?{" "}
        <span onClick={formChangeHandler}>
          Kattints ide!
        </span>
      </p>
    </React.Fragment>
  );
};

export default LoginForm;
