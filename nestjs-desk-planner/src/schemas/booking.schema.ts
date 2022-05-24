import * as mongoose from 'mongoose';


export const BookingSchema = new mongoose.Schema({
    bookingId: Number,
    bookedByUser: Number,
    bookingStart: Date,
    bookingEnd: Date,
    bookingIsActive: Boolean,
  });
  