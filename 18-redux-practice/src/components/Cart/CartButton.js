import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numberOfCartItems = cartItems.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  );
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(cartActions.toggleCartVisibility());

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
