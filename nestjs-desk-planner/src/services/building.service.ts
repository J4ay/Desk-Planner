import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IBuilding } from '../interfaces/building.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class BuildingService {

    constructor(@InjectModel('Building') private readonly buildingModel: Model<IBuilding>) {}

    public async getBuildings() {
        const buildings = await this.buildingModel.find().exec();

        if(!buildings || !buildings[0]) {
            throw new HttpException('No buildings found', 404);
        }
        return buildings;
    }

    public async getBuildingById(id: number): Promise<any> {
        const building = await this.buildingModel.findOne({ id }).exec();
        if(!building) {
            throw new HttpException('No building with id found', 404);
          }
        return building;
    }

    public async postBuilding(buildingId: number, buildingName: string, buildingAddress: string, buildingHeight: number): Promise<any> {
        const createdBuilding = new this.buildingModel({ buildingId, buildingName, buildingAddress, buildingHeight });
        const result = await createdBuilding.save();
        return result.buildingId;
    }

    public async deleteBuildingById(buildingId: number): Promise<any> {
        const building = await this.buildingModel.deleteOne({ buildingId }).exec();

        if(building.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return building;
    }

    public async deleteAllBuildings(): Promise<any> {
        const buildings = await this.buildingModel.deleteMany({}).exec();

        if(buildings.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return buildings;
    }

}