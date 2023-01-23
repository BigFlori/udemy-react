import React from "react";
import Button from "../UI/Button/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <ul className={styles.cart__item}>
      <div className={styles.item__data}>
        <h3>{props.name}</h3>
        <p>$16.5</p>
      </div>
      <p className={styles.amount}>x {props.amount}</p>
      <div className={styles.controls}>
        <Button>-</Button>
        <Button>+</Button>
      </div>
    </ul>
  );
};

export default CartItem;
