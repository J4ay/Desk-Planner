import * as mongoose from 'mongoose';


export const DeskSchema = new mongoose.Schema({
    id: Number,
    deskIsInRoom: Number,
    deskIsOnFloor: Number,
    deskIsInBuilding: Number,
    occupied: Boolean,
  });
  