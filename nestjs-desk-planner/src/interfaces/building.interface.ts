import { Document } from 'mongoose';

export interface IBuilding extends Document {
    buildingId: number;
    buildingName: string;
    buildingAddress: string;
    buildingHeight: number;
}