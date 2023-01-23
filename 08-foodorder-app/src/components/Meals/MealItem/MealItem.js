import React, { useState, useRef, useContext } from "react";
import styles from "./MealItem.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import CartContext from "../../../cart/cart-context";

const MealItem = (props) => {
  const [amount, setAmount] = useState(1);
  const amountRef = useRef();
  const context = useContext(CartContext);

  const amountChangeHandler = (event) => {
    const value = Math.max(1, Math.min(999, Number(event.target.value)));
    setAmount(value);
  };

  const addHandler = () => {
    context.onAddMeal({
      id: props.id,
      name: props.name,
      description: props.description,
      price: +props.price
    })
  }

  return (
    <div className={styles.meal__item}>
      <div className={styles.meal__data}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h4>${props.price}</h4>
      </div>
      <div className={styles.meal__inputs}>
        <Input
          ref={amountRef}
          type='number'
          id={props.id}
          label='Amount'
          value={amount}
          onChange={amountChangeHandler}
        ></Input>
        <Button type='button' onClick={addHandler}>+ Add</Button>
      </div>
    </div>
  );
};

export default MealItem;
