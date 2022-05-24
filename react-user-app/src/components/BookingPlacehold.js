import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
/* import { red } from "@mui/material/colors"; */

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
      </Container>
    </Container>
  );
};
};

export default BookingPlacehold;
