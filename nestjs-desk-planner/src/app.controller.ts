import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getDesks() {
    return this.appService.getDesks();
  }

  @Post()
  async addDesk(
    @Body('id') id: number,
    @Body('building') building: number,
    @Body('floor') floor: number,
    @Body('room') room: number,
    @Body('occupied') occupied: boolean,
  ) {
    const createdDesk = await this.appService.postDesk(id, building, floor, room, occupied);
    return createdDesk;
  }

  @Post('/occupy')
  async occupyDesk(@Body('id') id: number) {
    const updatedDesk = await this.appService.occupyDesk(id);
    return updatedDesk;
  }

  @Delete()
  async deleteAllDesks(@Body('id') id: number) {
    {
      if (id) {
        const deletedDesk = await this.appService.deleteDeskById(id);
        return deletedDesk;
      }
      else {
        const desk = await this.appService.deleteAllDesks();
        return desk;
      }
    }
  }
}