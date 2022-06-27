import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FloorService } from '../services/floor.service';
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';

@Controller('/floor')
export class FloorController {
  constructor(private readonly floorService: FloorService) { }

  @Get()
  @Unprotected()
  getFloors(@Body('floorId') floorId: number) {
    if (floorId) {
      const request = this.floorService.getFloorById(floorId);
      return request;
    }
    else {
      return this.floorService.getFloors();
    }
  }



  @Post()
  @Unprotected()
  async addFloor(
    @Body('floorId') floorId: number,
    @Body('floorIsInBuilding') floorIsInBuilding: number,
    @Body('floorName') floorName: string,
    @Body('floorRooms') floorRooms: number,
  ) {
    const createdFloor = await this.floorService.postFloor(floorId, floorIsInBuilding, floorName, floorRooms);
    return createdFloor;
  }

  @Post('/getFloorsByBuilding')
  @Unprotected()
  getFloorsByBuilding(@Body('floorIsInBuilding') floorIsInBuilding: number) {
    return this.floorService.getFloorsByBuilding(floorIsInBuilding);
  }

  @Delete()
  @Unprotected()
  async deleteAllFloors(@Body('floorId') floorId: number) {
    {
      if (floorId) {
        const deletedFloor = await this.floorService.deleteFloorById(floorId);
        return deletedFloor;
      }
      else {
        const floor = await this.floorService.deleteAllFloors();
        return floor;
      }
    }
  }
}