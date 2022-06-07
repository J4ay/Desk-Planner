import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";
import TopAppBarMessages from "./TopAppBarMessages";
import BottomNavBar from "./BottomNavBar";


  class Messages extends React.Component{
    constructor(props) {
      super(props);
      this.state = {Messages: []};
    }
    componentDidMount() {
      HttpService.getMessages().then(res => {
        this.setState({ messages: res });
      });
    }

  render() 
{
  return (
    <Container
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >
      <TopAppBarMessages />
        <Grid item sx={{ marginTop: "10px" }}>
        <Message
          room="Raum 1 EG"
          worker="Christoph Maier"
          description="Hallo, brauchst du den Raum..."
        >
        </Message>
        {this.state.Messages.map((Message) =>{
          return <Message room={Message.room} worker={Message.worker} description={Message.description}
          ></Message>
        })}
        </Grid> 
      <BottomNavBar />
    </Container>
  );}
};

export default Messages;
