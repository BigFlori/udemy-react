import React from "react";
import Button from "../Button/Button";
import styles from "./Popup.module.css";

const Popup = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDismiss}></div>
      <div className={styles.infobox}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.message}>
          <p>{props.children}</p>
        </div>
        <div className={styles.actions}>
          <Button
            type='button'
            className={styles.button}
            onClick={props.onDismiss}
          >
            Értem!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
