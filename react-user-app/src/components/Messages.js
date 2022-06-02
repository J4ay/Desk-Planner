import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";

 /*import { red } from "@mui/material/colors"; */
 /*function color(occupied) {
  // Hier war dein Fehler
  //await HttpService.occupyTable(tid);
  //for (const i of document.getElementsByClassName("table")) {
    if (occupied === true) {
      return  "red";
    }
    return "green";
    
  //}
}*/

  class Messages extends React.Component{
    constructor(props) {
      super(props);
      this.state = {Messages: []};
    }
    componentDidMount() {
      HttpService.getMessages().then(res => {
        this.setState({ Messages: res });
      });
    }

  render() 
{
  return (
    <Container
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >
        <Grid item sx={{ marginTop: "10px" }}>
        <Message
          room="Raum 1 EG"
          worker="Christoph Maier"
          description="Hallo, brauchst du den Raum..."
        >
        </Message>
        </Grid>
        <Container
        sx={{
          position: "fixed",
          minHeight: "70%",
          height: "50%",
          minWidth: "90%",
          width: "90%",
        }}
      >
        {this.state.Messages.map((Messages) => {
         // return <Box id={Messages.id} key={Messages.id} className="messages"           
          return <Message key={Messages.id} Message={Messages}
          onClick={() => {
            HttpService.deleteMessage(Messages.id).then(res => {
              this.forceUpdate();
            });
          }}
        />;})}
      </Container>
    </Container>
  );}
};

export default Messages;
