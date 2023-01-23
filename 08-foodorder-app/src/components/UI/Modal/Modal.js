import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { CartContextProvider } from "../../../cart/cart-context";

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClose}></div>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <CartContextProvider>
          <div className={styles.modal}>
            <header>
              <h1>{props.title}</h1>
              <FontAwesomeIcon
                icon={faX}
                className={styles.close__icon}
                onClick={props.onClose}
              />
            </header>
            {props.children}
          </div>
        </CartContextProvider>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
