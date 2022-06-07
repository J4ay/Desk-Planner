import { HttpException, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IUser } from "../interfaces/user.interface";


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    public async getUsers() {
        const users = await this.userModel.find().exec();

        if(!users || !users[0]) {
          throw new HttpException('No users found', 404);
        }
        return users;
    }

    public async getUserByName(userName: string): Promise<any> {
        const user = await this.userModel.findOne({ userName }).exec();

        if(!user) {
            throw new HttpException('No user with name found', 404);
        }
        return user;
    }

    public async postUser(userName: string, userFirstName: string, userLastName: string ): Promise<any> {
        const createdUser = new this.userModel({ userName, userFirstName, userLastName });
        const result = await createdUser.save();
        return result.id;
    }

    public async deleteAllUsers(): Promise<any> {
        const users = await this.userModel.deleteMany({}).exec();

        if(users.deletedCount === 0) {
          throw new HttpException('Not found', 404);
        }
        return users;
    }

    public async deleteUserByName(userName: string): Promise<any> {
        const user = await this.userModel.deleteOne({ userName }).exec();

        if(user.deletedCount === 0) {
          throw new HttpException('Not found', 404);
        }
        return user;
    }

}