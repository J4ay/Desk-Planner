import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IBooking } from 'src/interfaces/bookin.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class BookingService {

    constructor(@InjectModel('Booking') private readonly bookingModel: Model<IBooking>) {}

    public async getBookings() {
        const bookings = await this.bookingModel.find().exec();

        if(!bookings || !bookings[0]) {
            throw new HttpException('No bookings found', 404);
        }
        return bookings;
    }

    public async getBookingById(bookingId: number): Promise<any> {
        const booking = await this.bookingModel.findOne({ bookingId }).exec();

        if(!booking) {
            throw new HttpException('No booking with id found', 404);
        }
        return booking;
    }

    public async getBookingByTableId(bookingTableId: number): Promise<any> {
        const booking = await this.bookingModel.find({ bookingTableId }).exec();

        if(!booking || !booking[0]) {
            throw new HttpException('No booking found on table', 404);
        }
        return booking;
    }

    public async getBookingByUser(bookedByUser: number): Promise<any> {
        const booking = await this.bookingModel.find({ bookedByUser }).exec();

        if(!booking || !booking[0]) {
            throw new HttpException('No booking with id found', 404);
        }
        return booking;
    }

    public async postBooking( bookingId: number, bookedByUser: number, bookingTableId: number, bookingStart: Date, bookingEnd: Date, bookingIsActive: boolean ): Promise<any> {
        const createdBooking = new this.bookingModel({ bookingId, bookedByUser, bookingTableId, bookingStart, bookingEnd, bookingIsActive });
        const result = await createdBooking.save();
        return result.bookingId;
    }

    public async deleteBookingById(bookingId: number): Promise<any> {
        const booking = await this.bookingModel.deleteOne({ bookingId }).exec();

        if(booking.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return booking;
    }

    public async deleteAllBookings(): Promise<any> {
        const bookings = await this.bookingModel.deleteMany({}).exec();

        if(bookings.deletedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return bookings;
    }

    public async updateBooking(bookingId: number, bookedByUser: number, bookingTableId: number, bookingStart: Date, bookingEnd: Date, bookingIsActive: boolean): Promise<any> {
        const booking = await this.bookingModel.updateOne({ bookingId }, { bookedByUser, bookingStart, bookingTableId, bookingEnd, bookingIsActive }).exec();

        if(booking.modifiedCount === 0) {
            throw new HttpException('Not found', 404);
        }
        return booking;
    }
}