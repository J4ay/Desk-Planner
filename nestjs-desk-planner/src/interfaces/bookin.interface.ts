import { Document } from 'mongoose';

export interface IBooking extends Document {
    bookingId: number;
    bookedByUser: number;
	bookingTableId: number;
	bookingStart: Date;
	bookingEnd: Date;
	bookingIsActive: boolean;
}