import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

const root = ReactDOM.createRoot(document.getElementById("root"));

async function initUI() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

reportWebVitals();
UserService.initKeycloak(initUI);
HttpService.configure();
initUI();
