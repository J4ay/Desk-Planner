import * as React from "react";
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid'; MakeStyles,
import { ThemeProvider, createTheme } from "@mui/material/styles";

import BottomNavBar from "./components/BottomNavBar";
//import TopAppBar from "./components/TopAppBar";
//import BookingPlacehold from "./components/BookingPlacehold";
import "@fontsource/roboto";
// import BookingCard from './components/BookingCard';
// import BookingsPlacehold from './components/BookingsPlacehold';
import Anonymous from "./components/Anonymous";
import Authenticated from "./components/Authenticated";
import Login from "./components/Login";
//import Messages from "./components/Messages";
import TopAppBarMessages from "./components/TopAppBarMessages";
import TopAppBarChat from "./components/TopAppBarChat";
import Chats from "./components/Chats";
//import Chat from "./components/Chat";
//const useStyles = MakeStyles({
//})


const theme = createTheme({
  typography: {
    h5: {
      fontWeight: "Bold",
      letterSpacing: "1.5px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopAppBarChat/>
        {/*<TopAppBarMessages />
         <Messages/>*/}
            <Chats/>
          <BottomNavBar />


       
      </div>
    </ThemeProvider>
  );
}

export default App;
