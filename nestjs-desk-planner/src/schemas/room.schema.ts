import * as mongoose from 'mongoose';


export const RoomSchema = new mongoose.Schema({
    roomId: Number,
    roomIsOnFloor: Number,
    roomIsInBuilding: Number,
    roomName: String,
    roomDesks: Number,
    roomAllowedRoles: String,
    roomWallHandles: Object,
  });
  