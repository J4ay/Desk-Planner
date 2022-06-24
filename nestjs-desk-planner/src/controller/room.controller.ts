import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';


@Controller('/room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Get()
    @Unprotected()
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
    @Unprotected()
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
    @Unprotected()
    getFloorsByBuilding(@Body('roomIsOnFloor') roomIsOnFloor: number) {
    console.log("getFloorsByBuilding Route");
    return this.roomService.getRoomByFloor(roomIsOnFloor);
  }
  @Post('/getRoom')
  @Unprotected()
  getRoom(
    @Body('roomId') roomId: number,
    @Body('roomIsOnFloor') roomIsOnFloor: number,
    @Body('roomIsInBuilding') roomIsInBuilding: number) {
  console.log("getFloorsByBuilding Route");
  return this.roomService.getRoom(roomId, roomIsOnFloor, roomIsInBuilding);
  }

    @Delete()
    @Unprotected()
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