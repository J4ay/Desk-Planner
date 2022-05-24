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
function color(occupied) {
  // Hier war dein Fehler
  //await HttpService.occupyTable(tid);
  //for (const i of document.getElementsByClassName("table")) {
    if (occupied === true) {
      return  "red";
    }
    return "green";
    
  //}
}

class BookingPlacehold extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tables: []};
  }
  componentDidMount() {
    HttpService.getTables().then(res => {
      this.setState({ tables: res });
    });
  }

render() 
{
  return (
    <Container sx={{ marginTop: "64px" }}>
      <Grid container>
        <Grid item>
          <Dropdowns title="Gebäude" type="building" />
        </Grid>
        <Grid item>
          <Dropdowns title="Etage" type="floor" />
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
      >
        {this.state.tables.map((table) => {
          return <Box id={table.id} key={table.id} className="table"           
          sx={{
            bgcolor: color(table.occupied),
            marginTop: "15px",
            position: "relative",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => {
            HttpService.occupyTable(table.id).then(res => {
              table.occupied = !table.occupied;
              this.forceUpdate();
            });
          }}
          />;
        })}
        {/* <Box
          className="table"
          // Boxen haben ids zum einfärben
          id="1"
          sx={{
            //bgcolor: color(1),
            marginTop: "15px",
            position: "fixed",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => color(1)}
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
          onClick={() => color(2)}
        />
        <Box
          className="table"
          id="3"
          sx={{
            //bgcolor: colorPicker(HttpService.getTableOccupation(2)),
            marginTop: "15px",
            marginLeft: "120px",
            position: "fixed",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => color(3)}
        /> */}
      </Container>
    </Container>
  );
};
};

export default BookingPlacehold;
