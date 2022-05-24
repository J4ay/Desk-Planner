import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IFloor } from '../interfaces/floor.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class FloorService {

    constructor(@InjectModel('Floor') private readonly floorModel: Model<IFloor>) {}

    public async getFloors() {
        const floors = await this.floorModel.find().exec();

        if(!floors || !floors[0]) {
            throw new HttpException('No floors found', 404);
        }
        return floors;
    }

    public async getFloorById(floorId: number): Promise<any> {
        const floor = await this.floorModel.findOne({ floorId }).exec();
        if(!floor) {
            throw new HttpException('No floor with id found', 404);
          }
        return floor;
    }

    public async postFloor(floorId: number, floorIsInBuilding: number, floorName: string, floorRooms: number): Promise<any> {
        const createdFloor = new this.floorModel({ floorId, floorIsInBuilding, floorName, floorRooms });
        const result = await createdFloor.save();
        return result.floorId;
    }

    public async deleteFloorById(floorId: number): Promise<any> {
        const floor = await this.floorModel.deleteOne({ floorId }).exec();

        if(floor.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return floor;
    }

    public async deleteAllFloors(): Promise<any> {
        const floors = await this.floorModel.deleteMany({}).exec();

        if(floors.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return floors;
    }

}