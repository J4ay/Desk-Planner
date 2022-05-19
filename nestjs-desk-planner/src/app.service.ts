import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IDesk } from './interfaces/desk.interface';
import { InjectModel } from '@nestjs/mongoose';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {

  constructor(@InjectModel('Desk') private readonly deskModel: Model<IDesk>) {}

  public async getDesks() {
    const desks = await this.deskModel.find().exec();

    if(!desks || !desks[0]) {
      throw new HttpException('No desks found', 404);
    }
    return desks;
  }

  public async getDeskById(id: number): Promise<any> {
    const desk = await this.deskModel.findOne({ id }).exec();

    if(!desk) {
      throw new HttpException('No desk with id found', 404);
    }
    return desk;
  }

  public async getOccupied(id: number): Promise<any> {
    const desk = await this.deskModel.findOne({ id }).exec();
    const occupied = desk.occupied;

    if(!desk) {
      throw new HttpException('No desk with id found', 404);
    }
    return occupied;
  }

  public async postDesk(id: number, building: number, floor: number, room: number, occupied: boolean): Promise<any> {
    //const createdDesk = await this.deskModel(newdesk);
    const createdDesk = new this.deskModel({ id, building, floor, room, occupied });
    const result = await createdDesk.save();
    return result.id;
  }

  public async deleteDeskById(id: number): Promise<any> {
    const desk = await this.deskModel.deleteOne({ id }).exec();

    if(desk.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return desk;
  }

  public async deleteAllDesks(): Promise<any> {
    const desks = await this.deskModel.deleteMany({}).exec();

    if(desks.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return desks;
  }


  public async updateDeskById(id: number, propertyName: string, propertyValue: string): Promise<any> {
    const desk = await this.deskModel.findOneAndUpdate({ id }, {
      [propertyName]: propertyValue,
    }).exec();
    if(!desk) {
      throw new HttpException('Not found', 404);
    }
    return desk;
  }

  public async occupyDesk(id: number): Promise<any> {
    const desk = await this.deskModel.findOneAndUpdate({ id }, {
      occupied: true,
    }).exec();
    if(!desk) {
      throw new HttpException('Not found', 404);
    }
    return desk;
  }
}