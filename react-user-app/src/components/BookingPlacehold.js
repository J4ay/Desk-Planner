import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BookingPlacehold = () => {
  return (
    <Container sx={{ marginTop: "64px" }}>
      <Grid container>
        <Grid item>
          <Dropdowns title="Gebäude" />
        </Grid>
        <Grid item>
          <Dropdowns title="Etage" />
        </Grid>
        <Grid item>
          <Dropdowns title="Raum" />
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "fixed",
          minHeight: "70%",
          height: "50%",
          minWidth: "90%",
          width: "90%",
          border: "2px solid black",
        }}
      />
    </Container>
  );
};

export default BookingPlacehold;
