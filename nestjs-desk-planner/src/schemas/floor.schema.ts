import * as mongoose from 'mongoose';


export const FloorSchema = new mongoose.Schema({
    floorId: Number,
    floorIsInBuilding: Number,
    floorName: String,
    floorRooms: Number,
  });
  