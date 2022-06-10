import React from "react";
// vendor styles
import "react-datetime/css/react-datetime.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
// core styles
import "./scss/volt.scss";

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById("root")
);
