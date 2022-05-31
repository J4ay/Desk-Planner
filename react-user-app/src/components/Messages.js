import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";

 /*import { red } from "@mui/material/colors"; */


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
          return <Box id={Messages.id} key={Messages.id} className="messages"           
          sx={{
            //bgcolor: color(Messages.occupied),
            marginTop: "15px",
            position: "relative",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => {
            HttpService.occupyTable(Messages.id).then(res => {
              Messages.occupied = !Messages.occupied;
              this.forceUpdate();
            });
          }}
          />;
        })}

      </Container>
    </Container>
  );}
};

export default Messages;
