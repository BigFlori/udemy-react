import React from "react";
import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.name} ({props.age} éves)</p>
    </div>
  );
};

export default UserListItem;
