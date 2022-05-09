import { Controller, Get, Put } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDesks() {
    return this.appService.getDesks();
  }

  @Put()
  postDesk(newdesk) {
    return this.appService.postDesk(newdesk);
  }
}