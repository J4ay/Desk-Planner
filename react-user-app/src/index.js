import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";
import Messages from "./components/Messages";
import BookingPlacehold from "./components/BookingPlacehold";
import BookingsPlacehold from "./components/BookingsPlacehold";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Async function, KA ob notwendig
async function initUI() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<BookingPlacehold />} />
          <Route path="messages" element={<Messages />} />
          <Route path="/bookings" element={<BookingsPlacehold />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

reportWebVitals();
UserService.initKeycloak(initUI);
HttpService.configure();
initUI();
