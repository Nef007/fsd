import React from "react";
import ReactDOM from "react-dom/client";
import "effector-logger/inspector";

import { BrowserRouter } from "react-router-dom";
import App from "./app";

import "./app/style/font-awesome.min.css";
import "./app/style/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app/style/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
