import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/Counter";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducers";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
