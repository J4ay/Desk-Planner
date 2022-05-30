import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FloorService } from '../services/floor.service';

@Controller('/floor')
export class FloorController {
  constructor(private readonly floorService: FloorService) { }

  @Get()
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
  getFloorsByBuilding(@Body('floorIsInBuilding') floorIsInBuilding: number) {
    console.log("getFloorsByBuilding Route");
    return this.floorService.getFloorsByBuilding(floorIsInBuilding);
  }

  @Delete()
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