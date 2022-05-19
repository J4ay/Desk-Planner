import React from "react";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import UserService from "../services/UserService";
import LoginIcon from "@mui/icons-material/Login";
import Authenticated from "./Authenticated";

const TopAppBar = () => {
  return (
    <Paper
      sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: "20" }}
      elevation={1}
    >
      <AppBar position="static" sx={{ fontSize: 72, bgcolor: "#003366" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Buchen
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <LaptopChromebookIcon sx={{ fontSize: 32 }} />
          </IconButton>

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

export default TopAppBar;

function toggle() {
  if (UserService.isLoggedIn()) {
    UserService.doLogout();
  } else {
    UserService.doLogin();
  }
}
