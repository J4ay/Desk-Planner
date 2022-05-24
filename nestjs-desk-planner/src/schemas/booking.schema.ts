import * as mongoose from 'mongoose';


export const BookingSchema = new mongoose.Schema({
    bookingId: Number,
    bookedByUser: Number,
    bookingEnd: Date,
    bookingStart: Date,
    bookingIsActive: Boolean,
  });
  