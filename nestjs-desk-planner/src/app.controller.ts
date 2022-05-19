import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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

  @Delete()
  async deleteDeskById(
    @Body('id') id: number,
  ) {
    const desk = await this.appService.deleteDeskById(id);
    return desk;
  }
  async deleteAllDesks(
    ) {
    const desk = await this.appService.deleteAllDesks();
    return desk;
  }
}