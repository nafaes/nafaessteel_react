import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import Layout from "./layout/Layout";
import GlobalProvider from "./context/Provider";
import history from "./helpers/history";
import "../src/translations/i18n";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router history={history}>
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
