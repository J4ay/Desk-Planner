import React from "react";
import ReactDOM from "react-dom/client";import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";
import MessagesPlacehold from "./components/MessagesPlacehold";
import BookingPlacehold from "./components/BookingPlacehold";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Async function, KA ob notwendig
async function initUI() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      <Route path="/" element={<BookingPlacehold />} />
      <Route path="messages" element={<MessagesPlacehold/>} />
    </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

reportWebVitals();
UserService.initKeycloak(initUI);
HttpService.configure();
initUI(); 