import { Document } from 'mongoose';

export interface IMessage extends Document {
    messageId: number;
    messageSender: string;
    messageReceiver: string;
    messageContent: string;
    messageDate: Date;
    messageDesk: number;
    messageRoom: number;
}