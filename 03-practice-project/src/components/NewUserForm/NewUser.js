import React, { useState } from "react";
import Popup from "../UI/Popup/Popup";
import styles from "./NewUser.module.css";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const [popupData, setPopupData] = useState();

  const showPopup = (popupData) => {
    setPopupData(popupData);
  };

  const dismissPopupHandler = () => {
    setPopupData();
  };

  const addUserHandler = (user) => {
    const extendedUser = {
      ...user,
      id: Math.random().toString(),
    };
    props.onAddUser(extendedUser);
  };

  return (
    <div className={styles["newuser-container"]}>
      {popupData && (
        <Popup title={popupData.title} onDismiss={dismissPopupHandler}>
          {popupData.message}
        </Popup>
      )}
      <UserForm onAddUser={addUserHandler} onError={showPopup} />
    </div>
  );
};

export default NewUser;
