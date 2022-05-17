import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

const root = ReactDOM.createRoot(document.getElementById('root'));
function initUI() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );}
  
  reportWebVitals();
  UserService.initKeycloak(initUI);
  HttpService.configure();
  initUI();