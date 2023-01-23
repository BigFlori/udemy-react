import React from "react";
import MealItem from "./MealItem/MealItem";
import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary/MealsSummary";
import dummymeals from "../../dummy-meals";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <div className={styles.meals__container}>
        {dummymeals.map((meal) => {
          return (
            <MealItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              key={meal.id}
              id={meal.id}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Meals;
