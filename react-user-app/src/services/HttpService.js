import axios from "axios";
import UserService from "./UserService";

let BASE_URL = "http://localhost:3001";

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
  const response = await axios.post('http://localhost:3001/desk/occupy', { id: pId });

  return response;
};

async function getTableOccupation(pId){
  const response = await axios.post('http://localhost:3001/desk/occupied', { id: pId });
  console.log("Id: " + pId);
  console.dir(response.data);
  return response.data;
}

async function getTables(){
  /* let JWTToken = UserService.getToken();
  axios
    .get(BASE_URL + '/desk', { headers: {"Authorization" : `Bearer ${JWTToken}`} })
    .then(res => {
      console.dir(res.data);
       return res.data;
      })
      .catch(error => console.log(error))  */

  const response = await axios.get('http://localhost:3001/desk');
  console.dir(response.data);
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

async function getFloorsByBuilding(buildingId){
  const response = await axios.post('http://localhost:3001/floor/getFloorsByBuilding', { floorIsInBuilding: buildingId });
  console.dir(response.data);
  return response.data;
}

async function getRoomsByFloorId(floorId){
  const response = await axios.post('http://localhost:3001/room/getRoomsByFloorId', { roomIsOnFloor: floorId });
  return response.data;
}

async function getBookings(){
  const response = await axios.get('http://localhost:3001/booking');
  return response.data;
}

async function deleteBooking(bID){
  if(bID){
    const response = await axios.delete('http://localhost:3001/booking', { bookingId : bID });
    return response.data;
  }
}

async function getMessages(){
  const response = await axios.get('http://localhost:3001/message');
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
  getFloorsByBuilding,
  getBookings,
  getMessages,
  getRoomsByFloorId,
  deleteBooking
};

export default HttpService;
