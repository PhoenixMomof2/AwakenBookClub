import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles.css";
import "./not_round.css"
import App from "./components/App";

const container = document.getElementById("root");

render(
  <BrowserRouter> 
      <App /> 
  </BrowserRouter>,
  container
);