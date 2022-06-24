import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { DeskService } from "src/services/desk.service";
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';

@Controller('/desk')
export class DeskController{

    constructor(private readonly deskService: DeskService) {}

    @Get()
    @Unprotected()
  getDesks(@Body('id') id: number) {
    if (id) {
      const request = this.deskService.getDeskById(id);
      return request;
    }
    else {
      return this.deskService.getDesks();
    }
  }

  // Post statt Get
  @Post("/occupied")
  @Unprotected()
  getOccupied(@Body("id") id:number) {
   const occupied = this.deskService.getOccupied(id);

   return occupied;
  }

  @Post()
  @Unprotected()
  async addDesk(
    @Body('id') id: number,
    @Body('building') building: number,
    @Body('floor') floor: number,
    @Body('room') room: number,
    @Body('occupied') occupied: boolean,
  ) {
    const createdDesk = await this.deskService.postDesk(id, building, floor, room, occupied);
    return createdDesk;
  }

  @Post('/occupy')
  @Unprotected()
  async occupyDesk(@Body('id') id: number) {
    const updatedDesk = await this.deskService.occupyDesk(id);
    return updatedDesk;
  }

  @Delete()
  @Unprotected()
  async deleteAllDesks(@Body('id') id: number) {
    {
      if (id) {
        const deletedDesk = await this.deskService.deleteDeskById(id);
        return deletedDesk;
      }
      else {
        const desk = await this.deskService.deleteAllDesks();
        return desk;
      }
    }
  }


}