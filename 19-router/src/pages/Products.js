import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The products page!</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
