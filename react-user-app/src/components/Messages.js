import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";

/* import { red } from "@mui/material/colors"; */



// Async function um farbe zu ändern
//function color(occupied) {
  // Hier war dein Fehler
  //await HttpService.occupyTable(tid);
  //for (const i of document.getElementsByClassName("table")) {
  /*  if (occupied === true) {
      return  "red";
    }
    return "green";
    
  //}
}*/
/*
class Messages extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tables: []};
  }*/
/*
  componentDidMount() {
    HttpService.getTables().then(res => {
      this.setState({ tables: res });
    });
  }*/


const Messages = () => {
  return (
<Container
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >

        <Grid item sx={{ marginTop: "10px" }}>
        <Message />
        </Grid>
        <Grid item sx={{ marginTop: "10px" }}>
        <Message />
        </Grid>


    </Container>




  );
};

export default Messages;
