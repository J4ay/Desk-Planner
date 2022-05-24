import { Document } from 'mongoose';

export interface IBooking extends Document {
    roomId: number;
    roomIsOnFloor: number;
    roomIsInBuilding: number;
    roomName: string;
    roomTables: number;
    roomAllowedRoles: string;
}