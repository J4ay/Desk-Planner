import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IRoom } from '../interfaces/room.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class RoomService {

    constructor(@InjectModel('Room') private readonly roomModel: Model<IRoom>) {}

    public async getRooms() {
        const rooms = await this.roomModel.find().exec();

        if(!rooms || !rooms[0]) {
            throw new HttpException('No rooms found', 404);
        }
        return rooms;
    }

    public async getRoomById(roomId: number): Promise<any> {
        const room = await this.roomModel.findOne({ roomId }).exec();

        if(!room) {
            throw new HttpException('No room with id found', 404);
        }
        return room;
    }

    public async getRoomByFloor(roomIsOnFloor: number): Promise<any> {
        const room = await this.roomModel.find({ roomIsOnFloor: roomIsOnFloor }).exec();

        if(!room || !room[0]) {
            throw new HttpException('No room found on floor', 404);
        }
        return room;
    }

    public async postRoom( roomId: number, roomIsOnFloor: number, roomIsInBuilding: number, roomName: string, roomDesks: number, roomAllowedRoles: string, roomWallHandles: object ): Promise<any> {
        const createdRoom = new this.roomModel({ roomId, roomIsOnFloor, roomIsInBuilding, roomName, roomDesks, roomAllowedRoles, roomWallHandles });
        const result = await createdRoom.save();
        return result.roomId;
    }

    public async deleteRoomById(roomId: number): Promise<any> {
        const room = await this.roomModel.deleteOne({ roomId }).exec();

        if(room.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return room;
    }

    public async deleteAllRooms(): Promise<any> {
        const rooms = await this.roomModel.deleteMany({}).exec();

        if(rooms.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return rooms;
    }

}