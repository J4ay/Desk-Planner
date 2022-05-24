import * as mongoose from 'mongoose';


export const BuildingSchema = new mongoose.Schema({
    buildingId: Number,
    buildingName: String,
    buildingAddress: String,
    buildingHeight: Number,
  });
  