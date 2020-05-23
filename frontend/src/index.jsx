import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

//foi trocado por Routes import App from "./main/app";
import Routes from "./main/routes";
import reducers from "./main/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); //configurar o auxiliar redux devTools do chrome

const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
); //Possibilitar o funcionamento assincrono no meio do ciclo entre react e redux é feito uma "pausa" para dar tempo de fazer a requisicao no backend

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
