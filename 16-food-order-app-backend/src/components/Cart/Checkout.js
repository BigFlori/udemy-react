import Modal from "../UI/Modal";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalValue,
    isValid: postalIsValid,
    hasError: postalHasError,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");

  const formIsValid =
    nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const { isLoading, error, sendRequest } = useHttp();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const confirmHandler = (event) => {
    event.preventDefault();

    nameBlurHandler();
    streetBlurHandler();
    postalBlurHandler();
    cityBlurHandler();

    if (!formIsValid) {
      return;
    }

    sendRequest(
      {
        url: "https://react-fetch-api-learning-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          name: nameValue,
          street: streetValue,
          postal: postalValue,
          city: cityValue,
          totalPrice: cartCtx.totalAmount,
          items: {
            ...cartCtx.items,
          },
        },
      },
      (data) => {
        console.log(data);
        setOrderSubmitted(true);
      }
    );

    nameReset();
    streetReset();
    postalReset();
    cityReset();
    cartCtx.reset();
  };

  return (
    <Modal onClose={props.onCancel}>
      {orderSubmitted ? (
        <p>Order has been successfully sent!</p>
      ) : (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div
            className={`${classes.control} ${nameHasError && classes.invalid}`}
          >
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={nameValue}
            />
          </div>
          <div
            className={`${classes.control} ${
              streetHasError && classes.invalid
            }`}
          >
            <label htmlFor='street'>Street</label>
            <input
              type='text'
              id='street'
              onChange={streetChangeHandler}
              onBlur={streetBlurHandler}
              value={streetValue}
            />
          </div>
          <div
            className={`${classes.control} ${
              postalHasError && classes.invalid
            }`}
          >
            <label htmlFor='postal'>Postal Code</label>
            <input
              type='text'
              id='postal'
              onChange={postalChangeHandler}
              onBlur={postalBlurHandler}
              value={postalValue}
            />
          </div>
          <div
            className={`${classes.control} ${cityHasError && classes.invalid}`}
          >
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              value={cityValue}
            />
          </div>
          <div className={classes.actions}>
            {error && <p>{error}</p>}
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button
              className={`${classes.submit} ${isLoading && classes.loading}`}
            >
              Confirm
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default Checkout;
