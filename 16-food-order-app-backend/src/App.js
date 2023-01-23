import { useState, useContext } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthProvider from "./store/AuthProvider";
import Checkout from "./components/Cart/Checkout";
import LoginModal from "./components/Login/LoginModal";
import AuthContext from "./store/auth-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);
  const authCtx = useContext(AuthContext);

  //Cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  //Checkout
  const showCheckout = () => {
    setCheckoutIsShown(true);
    setCartIsShown(false);
  };

  const hideCheckout = () => {
    setCheckoutIsShown(false);
  };
  //Admin login
  const showLogin = () => {
    if (authCtx.isLoggedIn) {
      authCtx.logout();
    } else {
      setLoginIsShown(true);
    }
  };
  const hideLogin = () => {
    setLoginIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onCheckout={showCheckout} />
      )}
      {checkoutIsShown && <Checkout onCancel={hideCheckout} />}
      {loginIsShown && <LoginModal onClose={hideLogin} />}
      <Header onShowCart={showCartHandler} onShowLogin={showLogin} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
