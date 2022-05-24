import { Document } from 'mongoose';

export interface IDesk extends Document {
    id: number;
    deskIsInRoom: number;
    deskIsOnFloor: number;
    deskIsInBuilding: number;
    occupied: boolean;
}