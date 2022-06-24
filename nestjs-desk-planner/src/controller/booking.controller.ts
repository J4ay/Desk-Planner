import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookingService } from '../services/booking.service';
import { Roles, RoleMatchingMode, Unprotected } from 'nest-keycloak-connect';


@Controller('/booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Get()
    @Unprotected()
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
    @Unprotected()
    async addBooking(
        @Body('bookingId') bookingId: number,
        @Body('bookedByUser') bookedByUser: number,
        @Body('bookingTableId') bookingTableId: number,
        @Body('bookingRoomId') bookingRoomId: number,
        @Body('bookingStart') bookingStart: Date,
        @Body('bookingEnd') bookingEnd: Date,
        @Body('bookingIsWeekly') bookingIsWeekly: boolean,
    ) {
        const createdBooking = await this.bookingService.postBooking(bookingId, bookedByUser, bookingTableId, bookingRoomId, bookingStart, bookingEnd, bookingIsWeekly);
        return createdBooking;
    }

    @Post('/getBookingsByUser')
    @Unprotected()
    async getBookingsByUser(@Body('bookedByUser') bookedByUser: number) {
        const bookings = await this.bookingService.getBookingByUser(bookedByUser);
        return bookings;
    }

    @Post('/getBookingsByTable')
    @Unprotected()
    async getBookingsByTable(@Body('bookingTableId') bookingTableId: number) {
        const bookings = await this.bookingService.getBookingByTable(bookingTableId);
        return bookings;
    }

    @Put()
    @Unprotected()
    async updateBooking(
        @Body('bookingId') bookingId: number,
        @Body('bookedByUser') bookedByUser: number,
        @Body('bookingTableId') bookingTableId: number,
        @Body('bookingRoomId') bookingRoomId: number,
        @Body('bookingStart') bookingStart: Date,
        @Body('bookingEnd') bookingEnd: Date,
        @Body('bookingIsWeekly') bookingIsWeekly: boolean,
    ) {
        const updatedBooking = await this.bookingService.updateBooking(bookingId, bookedByUser, bookingTableId, bookingRoomId, bookingStart, bookingEnd, bookingIsWeekly);
        return updatedBooking;
    }

    @Post("/delete")
    @Unprotected()
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