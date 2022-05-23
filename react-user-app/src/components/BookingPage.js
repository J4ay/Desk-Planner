import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import { color } from "@mui/system";
/* import { red } from "@mui/material/colors"; */


class BookingPage extends React.Component {


constructor(props) {
  super(props);
  this.state = {Number: 0};
  this.makeTimer();
  //this.color();
}


/* colorPicker(occupied) {
  console.dir(occupied);
  if(occupied){
    console.log("red picked");
    return "red";
  } else {
    console.log("green picked");
    return "green";
  }
} */

makeTimer() {
  setInterval(() => {
    console.log("------------------------------------------------ timer ------------------------------------------------");
    color();
  }, 5000)
}

// Async function um farbe zu ändern
color() {
  for (const i of document.getElementsByClassName("table")) {
    const res = HttpService.getTableOccupation(i.id);
    if (res === true) {
      i.style.backgroundColor = "red";
    } else {
      i.style.backgroundColor = "green";
    }
  }
};

render() {
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
        onClick={() => {}}
      >
        <Box
          className="table"
          // Boxen haben ids zum einfärben
          id="1"
          sx={{
            //bgcolor: this.state.bgcolor1,
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
            //bgcolor: this.state.bgcolor2,
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

}

export default BookingPage;
