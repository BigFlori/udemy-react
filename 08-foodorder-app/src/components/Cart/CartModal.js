import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";
import styles from "./CartModal.module.css";
import CartContext from "../../cart/cart-context";

const CartModal = (props) => {
  const context = useContext(CartContext);

  // const counts = {};
  // let totalPrice = 0.0;
  // if (context.meals.length > 0) {
  //   for (const obj of context.meals) {
  //     counts[obj.id] = counts[obj.id] ? counts[obj.id] + 1 : 1;
  //     totalPrice += +obj.price;
  //   }
  // }
  console.log(context.meals);

  return (
    <React.Fragment>
      {context.meals.length > 0 && (
        <li>
          {context.meals.map((meals) => {
            return <CartItem name={meals.name} amount={1} key={meals.id} />;
          })}
        </li>
      )}
      {context.meals.length < 1 && <h1>Üres a kosarad!</h1>}
      <div className={styles.total__price}>
        <h1>Total Price</h1>
        <h1>${1}</h1>
      </div>
      <div className={styles.actions}>
        <Button className={styles.monochrome} onClick={props.onClose}>
          Close
        </Button>
        <Button>Order</Button>
      </div>
    </React.Fragment>
  );
};

export default CartModal;
