import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNavBar from "./components/BottomNavBar";
import TopAppBar from "./components/TopAppBar";
import BookingPlacehold from "./components/BookingPlacehold";
import "@fontsource/roboto";
import Anonymous from "./components/Anonymous";
import Authenticated from "./components/Authenticated";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Chats from "./components/Chats";
import LayoutDesigner from "./components/LayoutDesigner";
import BookingsPlacehold from "./components/BookingsPlacehold";
import { Routes, Route } from "react-router-dom";

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
        <TopAppBar />
        {/* <Authenticated> */}
          <Routes>
            <Route path="/" element={<BookingPlacehold />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/bookings" element={<BookingsPlacehold />} />
            <Route path="/chat" element={<Chats />} />
            <Route path="/layout" element={<LayoutDesigner />} />
          </Routes>
          <BottomNavBar />
        {/* </Authenticated>
        <Anonymous>
          <Login />
        </Anonymous> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
