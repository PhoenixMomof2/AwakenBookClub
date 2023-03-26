import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles.css";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
      <App /> 
  </BrowserRouter>,
)