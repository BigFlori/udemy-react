import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CartItem = (props) => {
  const { id, name, amount, price } = props.item;
  const total = amount * price;

  const dispatch = useDispatch();
  const addItem = () =>
    dispatch(cartActions.addItem({ ...props.item, amount: 1 }));
  const removeItem = () => dispatch(cartActions.removeItem(id));

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
