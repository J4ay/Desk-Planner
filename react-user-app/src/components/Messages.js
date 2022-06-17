import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";
import TopAppBarMessages from "./TopAppBarMessages";


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
      sx={{ marginTop: "64px", marginRight: "12px", bgcolor: "#f4f4f4" }}
    >
      <TopAppBarMessages />
        <Grid item sx={{ marginTop: "10px" }}>
        <Message>
        </Message>
        {this.state.messages.map((message) =>{
          return <Message room={message.messageRoom} worker={message.messageSender} description={message.messageContent}
          ></Message>
        })}
        </Grid> 
    </Container>
  );}
};

export default Messages;
