import React from "react";
import ReactDOM from "react-dom";
// import '../index.css';
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
