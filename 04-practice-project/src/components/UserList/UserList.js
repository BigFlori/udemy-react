import React from "react";
import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  let content = <p>Még nem került hozzáadásra felhasználó.</p>;

  if (props.items.length > 0) {
    content = props.items.map(user => {
      return <UserListItem key={user.id} name={user.username} age={user.age} />
    })
  }

  return (
    <div className={styles.container}>
      {content}
    </div>
  );
};

export default UserList;
