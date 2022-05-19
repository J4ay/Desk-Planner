import axios from "axios";
import UserService from "./UserService";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

const _axios = axios.create();

const configure = () => {
  _axios.interceptors.request.use((config) => {
    if (UserService.isLoggedIn()) {
      const cb = () => {
        config.headers.Authorization = `Bearer ${UserService.getToken()}`;
        return Promise.resolve(config);
      };
      return UserService.updateToken(cb);
    }
  });
};

const getAxiosClient = () => _axios;

const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
};

function callAPI(){
  fetch('http://localhost:3000/occupy', { method: 'POST', headers: { body: JSON.stringify({ id: 1}) } });
};

export default HttpService;
