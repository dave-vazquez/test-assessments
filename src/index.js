import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./store";
import RootContainer from "./styles/RootContainer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <RootContainer>
      <App />
    </RootContainer>
  </Provider>,
  document.getElementById("root")
);
