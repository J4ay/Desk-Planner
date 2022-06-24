import React from "react";
import BookingCard from "./BookingCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import TopAppBar from "./TopAppBar";

class BookingsPlacehold extends React.Component{
  constructor(props) {
    super(props);
    this.state = {bookings: []};
  }
  componentDidMount() {
    HttpService.getBookings().then(res => {
      this.setState({ bookings: res });
    });
  }

  render() {
    return (
      <Container
        sx={{ marginTop: "100px", marginBottom: "100px"}}
      >
        <TopAppBar />
        <Grid container
          rowSpacing={4}
        >
          {this.state.bookings.map((bookings) => {
            // benötigte Parameter: Raum, Datum, IntervallStart und IntervallEnde
            return <BookingCard bId={bookings.bookingId} room={bookings.bookingRoomId} table={bookings.bookingTableId} date={bookings.bookingStart} durationStart={bookings.bookingStart} durationEnd={bookings.bookingEnd} weekly={bookings.bookingIsWeekly}
          />;
        })}
        </Grid>
      </Container>
    );
  };
};

export default BookingsPlacehold;