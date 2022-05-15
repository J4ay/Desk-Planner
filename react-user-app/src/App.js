import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {MakeStyles, ThemeProvider, createTheme } from '@mui/material/styles';

import Dropdowns from './components/Dropdowns';
import BottomNavBar from './components/BottomNavBar';
import TopAppBar from './components/TopAppBar';
import "@fontsource/roboto";

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

      <Container sx={{marginTop: "64px"}}>
      <Grid container>
        <Grid item>
        <Dropdowns title="Gebäude" />
        </Grid>
        <Grid item>
        <Dropdowns title="Etage" />
        </Grid>
        <Grid item>
        <Dropdowns title="Raum" />
        </Grid>
      </Grid>
        <Box sx={{position: 'fixed', minHeight: "70%", height: "50%",
        minWidth: "90%", width: "90%", border: '2px solid black' }} />
      </Container>

    <BottomNavBar />

    </div>
    </ThemeProvider>
  );
}

export default App;
