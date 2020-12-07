import { ACTIONS } from "./reducer";

export const getProducts = (data) => {
  return {
    type: ACTIONS.GET_PRODUCTS,
    payload: data,
  };
};

export const retrieveCart = (cart) => {
  return {
    type: ACTIONS.RETRIEVE_CART,
    payload: cart,
  };
};

export const addCart = (cart) => {
  return {
    type: ACTIONS.ADD_TO_CART,
    payload: cart,
  };
};

export const updateCart = (cart) => {
  return {
    type: ACTIONS.UPDATE_CART,
    payload: cart,
  };
};

export const removeCart = (cart) => {
  return {
    type: ACTIONS.REMOVE_CART,
    payload: cart,
  };
};

export const emptyCart = (cart) => {
  return {
    type: ACTIONS.EMPTY_CART,
    payload: cart,
  };
};
