import React from "react";
import Home from "./components/Home";
import reducer from "./helper/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
