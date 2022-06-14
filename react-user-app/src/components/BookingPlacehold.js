import React from "react";
import axios from "axios";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import TimePopUp from "./TimePopUp";
import UserService from "../services/UserService";
/* import { red } from "@mui/material/colors"; */

let BASE_URL = "http://localhost:3001";


// Async function um farbe zu ändern
function color(occupied) {
    if (occupied === true) {
      return  "red";
    }
    return "green";
}

class BookingPlacehold extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tables: []};
  }

  componentDidMount = () => {
    //console.dir(HttpService.getTables());
    this.updateTables()
    this.interval = setInterval(() => { this.updateTables() }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTables = () => {
    let JWTToken = UserService.getToken();
    axios
    .get(BASE_URL + '/desk', { headers: {"Authorization" : `Bearer ${JWTToken}`} })
    .then(res => {
      //console.dir(res.data);
      this.setState({tables: res.data});
      })
      .catch(error => console.log(error)) ;
  }

render() 
{
  //console.dir(this.state.tables);
  if(this.state.tables) {
  return (
    <Container sx={{ marginTop: "64px" }}>
      <Grid container>
        <Dropdowns/>
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
        {
        this.state.tables.map((table) => {
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
            console.log(UserService.getToken());
            HttpService.occupyTable(table.id).then(res => {
              table.occupied = !table.occupied;
              this.forceUpdate();
            });
          }}
          />;
        })
        }
      
      </Container>
    </Container>
  );
};}
}

export default BookingPlacehold;
