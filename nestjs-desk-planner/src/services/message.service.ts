import { HttpException, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IMessage } from "src/interfaces/message.interface";


@Injectable()
export class MessageService {

    constructor(@InjectModel('Message') private readonly messageModel: Model<IMessage>) {}

    public async getMessages(): Promise<any> {
        const messages = await this.messageModel.find().exec();

        if(!messages || !messages[0]) {
            throw new HttpException('No messages found', 404);
        }
        return messages;
    }

    public async getMessagesBySenderAndReceiver(messageSender: string, messageReceiver: string): Promise<any> {
        const messages = await this.messageModel.find({ messageSender, messageReceiver }).exec();

        if(!messages || !messages[0]) {
            throw new HttpException('No messages found', 404);
        }
        return messages;
    }

    public async postMessage( messageId: number ,messageSender: string, messageReceiver: string, messageContent: string, messageDate: Date, messageDesk: number, messageRoom: number ): Promise<any> {
        const createdMessage = new this.messageModel({ messageId, messageSender, messageReceiver, messageContent, messageDate, messageDesk, messageRoom });
        const result = await createdMessage.save();
        return result.messageId;
    }

    public async deleteMessageById(messageId: number): Promise<any> {
        const message = await this.messageModel.deleteOne({ messageId }).exec();

        if(message.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return message;
    }

    public async deleteAllMessages(): Promise<any> {
        const messages = await this.messageModel.deleteMany({}).exec();

        if(messages.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return messages;
    }

    public async deleteAllMessagesBySender(messageSender: string): Promise<any> {
        const messages = await this.messageModel.deleteMany({ messageSender }).exec();

        if(messages.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return messages;
    }

    public async deleteAllMessagesByReceiver(messageReceiver: string): Promise<any> {
        const messages = await this.messageModel.deleteMany({ messageReceiver }).exec();

        if(messages.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return messages;
    }

    public async deleteAllMessagesByDesk(messageDesk: number): Promise<any> {
        const messages = await this.messageModel.deleteMany({ messageDesk }).exec();

        if(messages.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return messages;
    }



}
