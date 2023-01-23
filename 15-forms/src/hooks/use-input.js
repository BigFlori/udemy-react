import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = (validateValueFn) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValueFn(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangedHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
