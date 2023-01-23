import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classes from "./HeaderAccountButton.module.css";
import AuthContext from "../../store/auth-context";

const HeaderAccountButton = (props) => {
  const authCtx = useContext(AuthContext);
  const icon = authCtx.isLoggedIn ? (
    <FontAwesomeIcon icon={faRightFromBracket} />
  ) : (
    <FontAwesomeIcon icon={faUser} />
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>{icon}</span>
    </button>
  );
};

export default HeaderAccountButton;
