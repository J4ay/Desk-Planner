import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RoomService } from '../services/room.service';


@Controller('/room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Get()
    getRooms(@Body('roomId') roomId: number) {
        if (roomId) {
            const request = this.roomService.getRoomById(roomId);
            return request;
        }
        else {
            return this.roomService.getRooms();
        }
    }

    @Post()
    async addRoom(
        @Body('roomId') roomId: number,
        @Body('roomIsOnFloor') roomIsOnFloor: number,
        @Body('roomIsInBuilding') roomIsInBuilding: number,
        @Body('roomName') roomName: string,
        @Body('roomDesks') roomDesks: number,
        @Body('roomAllowedRoles') roomAllowedRoles: string,
    ) {
        const createdRoom = await this.roomService.postRoom(roomId, roomIsOnFloor, roomIsInBuilding, roomName, roomDesks, roomAllowedRoles);
        return createdRoom;
    }

}