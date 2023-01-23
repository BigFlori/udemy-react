import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.container}>
      <label>{props.children}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        style={{
          fontFamily: props.type === "password" ? "Verdana" : "inherit",
          letterSpacing: props.type === "password" ? "0.05em" : "inherit"
        }}
      />
    </div>
  );
};

export default Input;
