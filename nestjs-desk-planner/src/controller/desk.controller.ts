import { Body, Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { resolveSoa } from "dns";
import { DeskService } from "src/services/desk.service";
import { AuthenticatedUser, Public, Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';
import { AuthGuard } from "@nestjs/passport";

@Controller('/desk')
export class DeskController{

    constructor(private readonly deskService: DeskService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    //@Roles({ roles: ['app-admin'], mode: RoleMatchingMode.ALL})
    //@Unprotected()
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
  getOccupied(@Body("id") id:number) {
   const occupied = this.deskService.getOccupied(id);

   return occupied;
  }

  @Post()
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
  async occupyDesk(@Body('id') id: number) {
    const updatedDesk = await this.deskService.occupyDesk(id);
    return updatedDesk;
  }

  @Delete()
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