import { Document } from 'mongoose';

export interface IDesk extends Document {
    id: number;
    building: number;
    floor: number;
    room: number;
}