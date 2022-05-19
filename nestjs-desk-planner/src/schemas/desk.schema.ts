import * as mongoose from 'mongoose';


export const DeskSchema = new mongoose.Schema({
    id: Number,
    building: Number,
    floor: Number,
    room: Number,
    occupied: Boolean,
  });
  