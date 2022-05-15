import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {MakeStyles, ThemeProvider, createTheme } from '@mui/material/styles';

import BottomNavBar from './components/BottomNavBar';
import TopAppBar from './components/TopAppBar';
import BookingPlacehold from './components/BookingPlacehold';
import "@fontsource/roboto";
import BookingCard from './components/BookingCard';
import BookingsPlacehold from './components/BookingsPlacehold';

//const useStyles = MakeStyles({
//})
const theme = createTheme({
  typography: {
    h5: {
      fontWeight: 'Bold',
      letterSpacing: '1.5px',
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">

      <TopAppBar />

      <BookingPlacehold />

      <BottomNavBar />

    </div>
    </ThemeProvider>
  );
}

export default App;
