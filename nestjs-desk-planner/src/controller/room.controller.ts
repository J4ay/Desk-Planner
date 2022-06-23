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
        @Body('roomWallHandles') roomWallHandles: object,
        @Body('roomDeskHandles') roomDeskHandles: object
    ) {
        const createdRoom = await this.roomService.postRoom(roomId, roomIsOnFloor, roomIsInBuilding, roomName, roomDesks, roomAllowedRoles, roomWallHandles, roomDeskHandles);
        return createdRoom;
    }

    @Post('/getRoomsByFloorId')
    getFloorsByBuilding(@Body('roomIsOnFloor') roomIsOnFloor: number) {
    console.log("getFloorsByBuilding Route");
    return this.roomService.getRoomByFloor(roomIsOnFloor);
  }

    @Delete()
    async deleteAllDesks(@Body('id') id: number) {
      if (id) {
        const deletedDesk = await this.roomService.deleteRoomById(id);
        return deletedDesk;
      }
      else {
        const desk = await this.roomService.deleteAllRooms();
        return desk;
      }
    }

}