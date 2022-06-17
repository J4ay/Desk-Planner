import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";
import TopAppBar from "./TopAppBar";


  class Messages extends React.Component{
    constructor(props) {
      super(props);
      this.state = {messages: []};
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
      sx={{ marginTop: "100px", marginBottom: "100px", bgcolor: "#f4f4f4" }}
    >
      <TopAppBar />
        <Grid Container
          rowSpacing={4}
          sx={{bgcolor: "#f4f4f4" }} 
        >        
        {this.state.messages.map((message) =>{
          return <Message room={message.messageRoom} worker={message.messageSender} description={message.messageContent}></Message>
        })}
        </Grid> 
    </Container>
  );}
};

export default Messages;
