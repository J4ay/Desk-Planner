import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    messageId: Number,
    messageSender: String,
    messageReceiver: String,
    messageContent: String,
    messageDate: Date,
    messageDesk: Number,
    messageRoom: Number,
});