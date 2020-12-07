const INIT_STATE = {
  products: [],
  loading: true,
  cart: {},
};

export default function reducer(state = INIT_STATE, action) {
  return (HANDLERS[action.type] || (() => state))(state, action.payload);
}

export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  RETRIEVE_CART: "RETRIEVE_CART",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_CART: "REMOVE_CART",
  EMPTY_CART: "EMPTY_CART",
};

const HANDLERS = {
  [ACTIONS.GET_PRODUCTS]: handleProducts,
  [ACTIONS.RETRIEVE_CART]: handleRetrieveCart,
  [ACTIONS.ADD_TO_CART]: handleAddToCart,
  [ACTIONS.UPDATE_CART]: handleUpdateCart,
  [ACTIONS.REMOVE_CART]: handleRemoveCart,
  [ACTIONS.EMPTY_CART]: handleEmptyCart,
};

function handleProducts(state, payload) {
  return {
    ...state,
    products: payload,
    loading: false,
  };
}
function handleRetrieveCart(state, payload) {
  return {
    ...state,
    cart: payload,
  };
}
function handleAddToCart(state, payload) {
  return {
    ...state,
    cart: payload,
  };
}

function handleUpdateCart(state, payload) {
  return {
    ...state,
    cart: payload,
  };
}

function handleRemoveCart(state, payload) {
  return {
    ...state,
    cart: payload,
  };
}

function handleEmptyCart(state, payload) {
  return {
    ...state,
    cart: payload,
  };
}
