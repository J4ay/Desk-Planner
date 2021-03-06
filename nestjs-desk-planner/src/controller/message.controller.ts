import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MessageService } from 'src/services/message.service';
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';

@Controller('/message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    @Unprotected()
    getMessages(@Body('messageSender') messageSender: string, @Body('messageReceiver') messageReceiver: string) {
        if (messageSender && messageReceiver) {
            const request = this.messageService.getMessagesBySenderAndReceiver(messageSender, messageReceiver);
            return request;
        }
        else {
            return this.messageService.getMessages();
        }
    }

    @Post()
    @Unprotected()
    async addMessage(
        @Body('messageId') messageId: number,
        @Body('messageSender') messageSender: string,
        @Body('messageReceiver') messageReceiver: string,
        @Body('messageContent') messageContent: string,
        @Body('messageDate') messageDate: Date,
        @Body('messageDesk') messageDesk: number,
        @Body('messageRoom') messageRoom: number,
    ) {
        const createdMessage = await this.messageService.postMessage(messageId, messageSender, messageReceiver, messageContent, messageDate, messageDesk, messageRoom);
        return createdMessage;
    }

    @Post('getMessagesBySenderAndReceiver')
    @Unprotected()
    async getMessagesBySenderAndReceiver(
        @Body('messageSender') messageSender: string,
        @Body('messageReceiver') messageReceiver: string,
    ) {
        const messages = await this.messageService.getMessagesBySenderAndReceiver(messageSender, messageReceiver);
        return messages;
    }

    @Delete()
    @Unprotected()
    async deleteAllMessages(@Body('messageId') messageId: number) {
        if (messageId) {
            const message = await this.messageService.deleteMessageById(messageId);
            return message;
        }
        else {
            const messages = await this.messageService.deleteAllMessages();
            return messages;
        }

    }

}