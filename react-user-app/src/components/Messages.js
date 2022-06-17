import React from "react";
import Message from "./Message";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
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
      sx={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <TopAppBar />
        <Grid Container
          rowSpacing={4}
        >        
        {this.state.messages.map((message) =>{
          return <Message room={message.messageRoom} sender={message.messageSender} content={message.messageContent}></Message>
        })}
        </Grid> 
    </Container>
  );}
};

export default Messages;
