import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

import React from "react";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to='/quotes'
            >
              All Quotes
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to='/new-quote'
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
