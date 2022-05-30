import React from "react";
import BookingCard from "./BookingCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BottomNavBar from "./BottomNavBar";
import TopAppBar from "./TopAppBar";

const MessagesPlacehold = () => {
  return (
    <Container
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >
      <TopAppBar />
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
      <BottomNavBar/>
    </Container>
  );
};

export default MessagesPlacehold;
