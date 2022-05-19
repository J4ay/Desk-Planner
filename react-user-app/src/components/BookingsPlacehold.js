import React from "react";
import BookingCard from "./BookingCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BookingsPlacehold = () => {
  return (
    <Container
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >
      <Grid
        container
        rowSpacing={4}
        sx={{ marginLeft: "12px", bgcolor: "#f4f4f4" }}
      >
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingsPlacehold;
