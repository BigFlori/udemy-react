import React, { useContext } from "react";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
import classes from "./LoginModal.module.css";

const LoginModal = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(
    (value) => value.trim() !== "" && value.includes("@") && value.includes(".")
  );
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 3);

  const { isLoading, error, sendRequest } = useHttp();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    emailBlurHandler();
    passwordBlurHandler();

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    sendRequest(
      {
        url: "https://react-fetch-api-learning-default-rtdb.europe-west1.firebasedatabase.app/admins.json",
      },
      (data) => {
        const fetchedAdmins = [];
        for (const key in data) {
          fetchedAdmins.push({
            id: key,
            email: data[key].email,
          });
        }
        if (fetchedAdmins.some((admin) => admin.email === emailValue)) {
          authCtx.login(fetchedAdmins.at(0).id, fetchedAdmins.at(0).email);
        }
      }
    );

    emailReset();
    passwordReset();
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      {error && <p>{error}</p>}
      <form className={classes.form} onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailHasError && classes.invalid}`}
        >
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordHasError && classes.invalid
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onClose}>
            Cancel
          </button>
          <button
            type='submit'
            className={`${classes.submit} ${isLoading && classes.loading}`}
            disabled={isLoading}
          >
            Log-in
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
