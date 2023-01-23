import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  meals: [],
  onAddMeal: (mealObj) => {},
});

export const CartContextProvider = (props) => {
  const [mealsState, setMeals] = useState([]);

  const addMealHandler = (mealObj) => {
    setMeals((prevState) => {
      return [...prevState, mealObj];
    });
    console.log(mealsState);
  };

  return (
    <CartContext.Provider value={{ meals: mealsState, onAddMeal: addMealHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
