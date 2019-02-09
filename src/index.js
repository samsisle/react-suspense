import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./services/serviceWorker";
import "typeface-montserrat";
import "./styles/reset.css";

ReactDOM.render(<App />, document.getElementById("suspense-app"));
serviceWorker.register();
