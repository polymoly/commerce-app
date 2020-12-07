import React, { useEffect } from "react";
import { commerce } from "../lib/Commerce";
import { Products, Navbar, Cart } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getProducts,
  retrieveCart,
  addCart,
  updateCart,
  removeCart,
  emptyCart,
} from "../helper/actionCreators";

const Home = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    dispatch(getProducts(data));
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    dispatch(retrieveCart(cart));
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch(addCart(cart));
  };

  const handleUpdateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    dispatch(updateCart(cart));
  };

  const handleRemoveCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    dispatch(removeCart(cart));
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    dispatch(emptyCart(cart));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
