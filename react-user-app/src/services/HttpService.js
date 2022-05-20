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

function callAPI(id){
  /* const response = fetch('http://localhost:3001/occupy', { method: 'POST', headers: { body: JSON.stringify({ id: 1}) } })
                          .then(data => data.json()); */

  axios.post('http://localhost:3001/occupy', { id: id });
};

function callAPI2(id){
  const response = axios.get('http://localhost:3001/occupied', { id: id });

  //return response.data.occupied;
  return "hello";
};


const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
  callAPI,
  callAPI2
};

export default HttpService;
