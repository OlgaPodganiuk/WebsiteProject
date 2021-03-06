import { Link } from 'react-router-dom'

import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";

const Products = () => {
  return (
    <section className={classes.products}>
      <Card>
        <Link to="/product-category/kids">
          <h2>Продукти для дітей</h2>
        </Link>
        <Link to="/product-category/adults">
          <h2>Продукти для дорослих</h2>
        </Link>
        <Link to="/product-category/other">
          <h2>Різне</h2>
        </Link>
      </Card>
    </section>
  );
};

export default Products;
