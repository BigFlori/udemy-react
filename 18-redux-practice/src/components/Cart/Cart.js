import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const items = cartItems.map((item) => <CartItem item={item} key={item.id} />);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items.length > 0 ? items : <p>Your cart is empty.</p>}</ul>
    </Card>
  );
};

export default Cart;
