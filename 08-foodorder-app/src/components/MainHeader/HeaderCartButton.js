import React, { useState } from "react";
import styles from "./HeaderCartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Modal from "../UI/Modal/Modal";
import CartModal from "../Cart/CartModal";

const HeaderCartButton = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const cartCloseHandler = () => {
    setCartVisible(false);
  };

  const cartOpenHandler = () => {
    setCartVisible(true);
  };

  return (
    <React.Fragment>
      {cartVisible && (
        <Modal title='Kosár' onClose={cartCloseHandler}>
          <CartModal onClose={cartCloseHandler}></CartModal>
        </Modal>
      )}
      <button
        type='button'
        className={`${styles.button} ${styles.bump}`}
        onClick={cartOpenHandler}
      >
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
        <p className={styles.cart__text}>Your Cart</p>
        <p className={styles.badge}>0</p>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
