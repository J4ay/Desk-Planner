import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Mail from '@mui/icons-material/Mail';
import AddCircle from '@mui/icons-material/AddCircle';
import ViewList from '@mui/icons-material/ViewList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Grid from '@mui/material/Grid';
import {MakeStyles, ThemeProvider, createTheme } from '@mui/material/styles';

import Dropdowns from './components/Dropdowns';
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
      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={1}>
        <AppBar position="static" sx = {{ fontSize: 72, bgcolor: '#003366' }}>
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
            <LaptopChromebookIcon  sx={{ fontSize: 32 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>

      <Grid container sx={{position: 'fixed', paddingTop: "64px", paddingLeft: "12px"}}>
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

      <Container sx={{minHeight: "100%", height: "100%", position: 'fixed', marginTop: "100px"}}>
        <Box sx={{height: "70%", border: '2px solid black' }} />
      </Container>


    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
      <BottomNavigation
        showLabels
        sx = {{ 
          height: 72,
          '& .MuiBottomNavigationAction-label': {
            fontSize: '16px',
          },
        }}
        >
          <BottomNavigationAction label="Nachrichten" icon={<Mail fontSize="large" />} />
          <BottomNavigationAction label="Buchen" sx = {{ label: '20' }} icon={<AddCircle fontSize="large" />} />
          <BottomNavigationAction label="Buchungen" icon={<ViewList fontSize="large" />} />
      </BottomNavigation>
    </Paper>
    </div>
    </ThemeProvider>
  );
}

export default App;
