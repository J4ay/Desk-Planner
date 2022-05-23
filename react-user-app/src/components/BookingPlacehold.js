import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
/* import { red } from "@mui/material/colors"; */



/* function colorPicker(occupied) {
  console.dir(occupied);
  if(occupied){
    console.log("red");
    return "red";
  } else {
    console.log("green");
    return "green";
  }
} */

// Async function um farbe zu ändern
async function color() {
  for (const i of document.getElementsByClassName("table")) {
    const res = await HttpService.getTableOccupation(i.id);
    if (res === true) {
      i.style.backgroundColor = "red";
    } else {
      i.style.backgroundColor = "green";
    }
  }
};

const BookingPlacehold = () => {
  color();
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
        }}
        onClick={() => {color()}}
      >
        <Box
          className="table"
          // Boxen haben ids zum einfärben
          id="1"
          sx={{
            //bgcolor: colorPicker(HttpService.getTableOccupation(1)),
            marginTop: "15px",
            position: "fixed",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => HttpService.occupyTable(1)}
        />
        <Box
          className="table"
          id="2"
          sx={{
            //bgcolor: colorPicker(HttpService.getTableOccupation(2)),
            marginTop: "15px",
            marginLeft: "60px",
            position: "fixed",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => HttpService.occupyTable(2)}

        />
      </Container>
    </Container>
  );
};

export default BookingPlacehold;
