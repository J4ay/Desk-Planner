import React from "react";
import { useState } from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";
import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";

var chatsOutgoingArray = [];
var chatsIncomingArray = [];
var allChatsArray = [];

const useForceUpdate = () => useState()[1];

async function fillChatsOutgoingArray(otherPerson) {
  chatsOutgoingArray = await HttpService.getMessagesBySenderAndReceiver(UserService.getFirstName(), otherPerson);
  sortChats();
}

async function fillChatsIncomingArray(otherPerson) {
  chatsIncomingArray = await HttpService.getMessagesBySenderAndReceiver(otherPerson, UserService.getFirstName());
  sortChats();
}

async function sortChats() {
  allChatsArray = chatsOutgoingArray.concat(chatsIncomingArray);
  allChatsArray.sort(function (a, b) {
    return new Date(a.messageDate) - new Date(b.messageDate);
  });
  var helparray = [];
  helparray = allChatsArray;
  return helparray;
}

//TODO: Render chats without needing to press the refresh buttons

const Chat = (props) => {
  const { otherPerson } = useParams();
  const [allChats, setAllChats] = React.useState([]);
  
  const forceUpdate = useForceUpdate();
  React.useEffect(() => { 
    async function fillOptions() {
    fillChatsOutgoingArray(otherPerson);
    fillChatsIncomingArray(otherPerson);
    setAllChats(allChatsArray);
    }
    fillOptions();
  }, []);

  React.useEffect(() => {
    setAllChats(allChatsArray);
  }, [allChats, allChatsArray]);

  const [messageValue, setMessageValue] = React.useState("");

  const handleSendButtonClick = async () => {

    setAllChats(allChatsArray);

    HttpService.postMessage(1, UserService.getFirstName(), otherPerson, messageValue, new Date(), 1, 1);
    fillChatsIncomingArray(otherPerson);
    fillChatsOutgoingArray(otherPerson);
    setAllChats(allChatsArray);
  }

    return (

      <Container
        sx={{ marginTop: "80px", marginRight: "200px" }}
      >

        <Grid sx={{ marginTop: "100px" }}>
        <Button variant="contained" onClick={forceUpdate}>Refresh</Button>
          {allChats.map((chat) => {
            if(chat.messageSender === UserService.getFirstName()) {
            return <Grid sx={{ marginTop: "50px" }}>
              <Box component="span" sx={{ p: 2, border: '2px solid blue' }}>{chat.messageContent}</Box>
            </Grid>
            } else {
              return <Grid sx={{ marginTop: "50px" }}>
                <Box component="span" sx={{ p: 2, border: '2px solid red' }}>{chat.messageContent}</Box>
              </Grid>
            }
          })}
        </Grid>

        <Grid sx={{ marginTop: "50px" }}>

          <TextField value={messageValue} onChange={(event) => setMessageValue(event.target.value)} id="outlined-basic" label="Your Message" variant="outlined" />
          <IconButton size="large" onClick={() => handleSendButtonClick()} >
            <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
          </IconButton>

        </Grid>
      </Container>

    );
}

export default Chat;

