import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Product from "./Product";
import useStyles from "./products-styles";
import { useSelector } from "react-redux";

const Products = ({ onAddToCart }) => {
  const { products, loading } = useSelector((state) => state);
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {!loading ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))
        ) : (
          <CircularProgress size={30} />
        )}
      </Grid>
    </main>
  );
};

export default Products;
