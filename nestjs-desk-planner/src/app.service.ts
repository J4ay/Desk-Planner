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

  public async postDesk(newdesk) {
    const createdDesk = await new this.deskModel(newdesk);
    return createdDesk.save();
  }

  public async deleteDeskById(id: number): Promise<any> {
    const desk = await this.deskModel.deleteOne({ id }).exec();

    if(desk.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return desk;
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

  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}