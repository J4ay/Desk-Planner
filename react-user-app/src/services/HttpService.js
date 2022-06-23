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
  const response = await axios.get('http://localhost:3001/desk');
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

async function postRoom(roomId, roomIsOnFloor, roomIsInBuilding, roomName, roomDesks, roomAllowedRoles, roomWallHandles){
  const response = await axios.post('http://localhost:3001/room', { roomId, roomIsOnFloor, roomIsInBuilding, roomName, roomDesks, roomAllowedRoles, roomWallHandles });
  return response.data;
}

async function getRooms() {
  const response = await axios.get('http://localhost:3001/room');
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

async function getBookingsByUserId(uID){
  const response = await axios.post('http://localhost:3001/booking/getBookingsByUser', { bookingFromUserId: uID });
  return response.data;
}
// NEU ##################################################
async function getBookingsByTableId(pId){
  const response = await axios.post('http://localhost:3001/booking/getBookingsByTable', { bookingTableId: pId });
  return response.data;
}
// NEU ##################################################
async function postBooking(pId, uID, bookingID , bookingRoomId, bookingStart, bookingEnd, bookingSub){
  const response = await axios.post('http://localhost:3001/booking', { bookingId: bookingID, bookedByUser : uID, bookingTableId: pId,bookingRoomId : bookingRoomId, bookingStart : bookingStart, bookingEnd: bookingEnd, bookingIsWeekly : bookingSub});
  return response.data;
}

async function deleteBooking(bookingID){
  console.log("Booking ID in HTTP Service: " + bookingID);
  if(bookingID){
    const response = await axios.post('http://localhost:3001/booking/delete', { bookingId : bookingID });
    return response.data;
  }
}

async function getMessages(){
  const response = await axios.get('http://localhost:3001/message');
  return response.data;
}


async function postMessage(messageId, messageSender, messageReceiver, messageContent, messageDate, messageDesk, messageRoom){
  const response = await axios.post('http://localhost:3001/message', { messageId: messageId, messageSender: messageSender, messageReceiver: messageReceiver, messageContent: messageContent, messageDate: messageDate, messageDesk: messageDesk, messageRoom: messageRoom});
  return response.data;
}

async function getMessagesBySenderAndReceiver(sender, receiver){
  const response = await axios.post('http://localhost:3001/message/getMessagesBySenderAndReceiver', {messageSender: sender, messageReceiver: receiver });
  return response.data;
}


async function deleteMessages(messageID){
  console.log("Message ID in HTTP Service: " + messageID);
  if(messageID){
    const response = await axios.post('http://localhost:3001/message/delete', { messageId : messageID });
    return response.data;
  }
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
  getBookingsByUserId,
  deleteBooking,
  getBookingsByTableId,
  postBooking,

  postRoom,
  getRooms,
  getRoomsByFloorId,

  getMessages,
  postMessage,
  deleteMessages,
  getMessagesBySenderAndReceiver,
};

export default HttpService;
