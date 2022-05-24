import { Document } from 'mongoose';

export interface IFloor extends Document {
    floorId: number;
    floorIsInBuilding: number;
    floorName: string;
    floorRooms: number;
}