import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./services/serviceWorker";
import "typeface-montserrat";
import "./styles/reset.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("suspense-app")
);
serviceWorker.register();
