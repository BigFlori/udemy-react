import React, { useState } from "react";
import NewUser from "./components/NewUserForm/NewUser";
import Popup from "./components/UI/Popup/Popup";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <React.Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UserList items={userList} />
    </React.Fragment>
  );
}

export default App;
