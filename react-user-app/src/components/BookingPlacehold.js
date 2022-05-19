import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";

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
      <Container
        sx={{
          position: "fixed",
          minHeight: "70%",
          height: "50%",
          minWidth: "90%",
          width: "90%",
          border: "2px solid black",
        }}>
          <Box className="table"
            sx={{
              marginTop: "15px",
              position: "fixed",
              height: "40px",
              width: "40px",
              border: "2px solid navy",
            }}
            onClick={() => console.dir(HttpService.callAPI())}/>
          <Box className="table"
            sx={{
              marginTop: "15px",
              marginLeft: "60px",
              position: "fixed",
              height: "40px",
              width: "40px",
              border: "2px solid navy",
            }}
            onClick={() => HttpService.callAPI()}/>
      </Container>
    </Container>
  );
};

export default BookingPlacehold;
