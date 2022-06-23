import { Document } from 'mongoose';

export interface IBooking extends Document {
    bookingId: number;
    bookedByUser: number;
	bookingTableId: number;
	bookingRoomId: number;
	bookingStart: Date;
	bookingEnd: Date;
	bookingIsWeekly: boolean;
}