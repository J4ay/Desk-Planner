import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookingService } from '../services/booking.service';


@Controller('/booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Get()
    getBookings(@Body('bookingId') bookingId: number) {
        if (bookingId) {
            const request = this.bookingService.getBookingById(bookingId);
            return request;
        }
        else {
            return this.bookingService.getBookings();
        }
    }

    @Post()
    async addBooking(
        @Body('bookingId') bookingId: number,
        @Body('bookedByUser') bookedByUser: number,
        @Body('bookingTableId') bookingTableId: number,
        @Body('bookingRoomId') bookingRoomId: number,
        @Body('bookingStart') bookingStart: Date,
        @Body('bookingEnd') bookingEnd: Date,
        @Body('bookingIsActive') bookingIsActive: boolean,
    ) {
        const createdBooking = await this.bookingService.postBooking(bookingId, bookedByUser, bookingTableId, bookingRoomId, bookingStart, bookingEnd, bookingIsActive);
        return createdBooking;
    }

    @Post('/getBookingsByUser')
    async getBookingsByUser(@Body('bookedByUser') bookedByUser: number) {
        const bookings = await this.bookingService.getBookingByUser(bookedByUser);
        return bookings;
    }

    @Post('/getBookingsByTable')
    async getBookingsByTable(@Body('bookingTableId') bookingTableId: number) {
        const bookings = await this.bookingService.getBookingByTable(bookingTableId);
        return bookings;
    }

    @Put()
    async updateBooking(
        @Body('bookingId') bookingId: number,
        @Body('bookedByUser') bookedByUser: number,
        @Body('bookingTableId') bookingTableId: number,
        @Body('bookingRoomId') bookingRoomId: number,
        @Body('bookingStart') bookingStart: Date,
        @Body('bookingEnd') bookingEnd: Date,
        @Body('bookingIsActive') bookingIsActive: boolean,
    ) {
        const updatedBooking = await this.bookingService.updateBooking(bookingId, bookedByUser, bookingTableId, bookingRoomId, bookingStart, bookingEnd, bookingIsActive);
        return updatedBooking;
    }

    @Post("/delete")
    async deleteBooking(@Body('bookingId') bookingId: number) {
        if (bookingId) {
            const deletedBooking = await this.bookingService.deleteBookingById(bookingId);
            return deletedBooking;
        }
        else {
            const deletedBookings = await this.bookingService.deleteAllBookings();
            return deletedBookings;
        }
    }


}