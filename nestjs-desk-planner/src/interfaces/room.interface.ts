import { Document } from 'mongoose';

export interface IRoom extends Document {
    roomId: number;
    roomIsOnFloor: number;
    roomIsInBuilding: number;
    roomName: string;
    roomDesks: number;
    roomAllowedRoles: string;
}