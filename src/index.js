import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// const store = createStore(rootReducer);
// const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
