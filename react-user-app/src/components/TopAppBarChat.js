import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
//import Message from "./Message";
//import TopAppBarMessages from "./TopAppBarMessages";
import BottomNavBar from "./BottomNavBar";

import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import UserService from "../services/UserService";
import LoginIcon from "@mui/icons-material/Login";
import Authenticated from "./Authenticated";
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Card } from "@mui/material";
import Chat from "./Chat";


const TopAppBarChat = (worker, room) => {
  return (
    <Paper
      sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: "20" }}
      elevation={1}
    >
      <AppBar position="static" sx={{ fontSize: 72, bgcolor: "#003366" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Chat
            worker ="Pinar"
            room="Raum 1 EG"
            ></Chat>
          </Typography>

          <Authenticated>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              onClick={() => toggle()}
            >
              <LoginIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Authenticated>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TopAppBarChat;



function toggle() {
  if (UserService.isLoggedIn()) {
    UserService.doLogout();
  } else {
    UserService.doLogin();
  }
}