import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";

const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const usernameChangeHandler = (event) => {
    //Felhasználónév eltárolása state objectben
    setUserInput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    //Kor eltárolása state objectben
    setUserInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //Input validáció
    if (userInput.username.trim().length === 0) {
      props.onError({
        title: "Hiba!",
        message: "Nem adtál meg felhasználónevet!",
      });
      return;
    }

    if (userInput.age.trim().length === 0) {
      props.onError({
        title: "Hiba!",
        message: "Nem adtál meg kort!",
      });
      return;
    }

    if(+userInput.age < 1 || +userInput.age > 200) {
      props.onError({
        title: "Hiba!",
        message: "Nem valós kort adtál meg!",
      });
      return;
    }

    //Inputok rendben vannak
    setUserInput({
      username: "",
      age: "",
    });

    const userData = {
      ...userInput,
      age: +userInput.age,
    };

    props.onAddUser(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.controls}>
        <label>Keresztnév</label>
        <input
          type='text'
          onChange={usernameChangeHandler}
          value={userInput.username}
        />
      </div>
      <div className={styles.controls}>
        <label>Kor (Évben)</label>
        <input
          type='number'
          onChange={ageChangeHandler}
          value={userInput.age}
        />
      </div>
      <Button type='submit'>Felhasználó hozzáadása</Button>
    </form>
  );
};

export default UserForm;
