import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      name={props.name}
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
