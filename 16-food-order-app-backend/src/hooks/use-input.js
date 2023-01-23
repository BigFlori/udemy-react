import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      value: action.value,
    };
  }
  if (action.type === "BLUR") {
    return {
      ...state,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  return initialState;
};

const useInput = (validateValueFn) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const valueIsValid = validateValueFn(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
