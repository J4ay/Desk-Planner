import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Mail from "@mui/icons-material/Mail";
import AddCircle from "@mui/icons-material/AddCircle";
import ViewList from "@mui/icons-material/ViewList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

function currentPage() {
  const path = window.location.pathname;
  if (path === "/") {
    return 1;
  } else if (path === "/bookings") {
    return 2;
  } else if (path === "/messages") {
    return 0;
  }
  return 0;
}

const BottomNavBar = () => {
  const [value, setValue] = React.useState(currentPage());
  
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "20" }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        sx={{
          height: 72,
          "& .MuiBottomNavigationAction-label": {
            fontSize: "16px",
          },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Nachrichten"
          icon={<Mail fontSize="large" />}
          component={Link} to="/messages"
          onClick={() => {
            console.log(UserService.getToken());}}
        />
        <BottomNavigationAction
          label="Buchen"
          sx={{ label: "20" }}
          icon={<AddCircle fontSize="large" />}
          component={Link} to="/"
          onClick={() => {
            console.log(UserService.getToken());}}
        />
        <BottomNavigationAction
          label="Buchungen"
          icon={<ViewList fontSize="large" />}
          component={Link} to="/bookings"
          onClick={() => {
            console.log(UserService.getToken());}}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
