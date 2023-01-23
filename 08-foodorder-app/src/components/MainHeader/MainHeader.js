import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./MainHeader.module.css";

import mealImage from "../../meals.jpg";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <header className={styles.main__header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.meal__image}>
        <img src={mealImage} alt='Meals' />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
