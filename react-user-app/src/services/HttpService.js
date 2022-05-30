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

// Async sonst gehts net
async function occupyTable(pId){
  const response = await axios.post('http://localhost:3001/occupy', { id: pId });

  return response;
};

async function getTableOccupation(pId){
  const response = await axios.post('http://localhost:3001/occupied', { id: pId });
  // console.log("Id: " + pId);
  // console.dir(response.data);
  return response.data;
}

async function getTables(){
  const response = await axios.get('http://localhost:3001/');
  return response.data;
}

async function getBuildings(){
  const response = await axios.get('http://localhost:3001/building');
  return response.data;
}

async function getFloors(){
  const response = await axios.get('http://localhost:3001/floor');
  return response.data;
}

const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
  occupyTable,
  getTableOccupation,
  getTables,
  getBuildings,
  getFloors,
};

export default HttpService;
