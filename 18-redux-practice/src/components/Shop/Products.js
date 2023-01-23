import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  );

  const products = availableProducts.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.name}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
