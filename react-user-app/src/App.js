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
import {MakeStyles, ThemeProvider, createTheme } from '@mui/material/styles';

import "@fontsource/roboto";

//const useStyles = MakeStyles({
//})
//const theme = createTheme({
//})

function App() {
  return (
    //<ThemeProvider theme={theme}>
    <div className="App">
      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={1}>
        <AppBar position="static" sx = {{ fontSize: 72 }}>
          <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buchen
          </Typography>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
            <Mail />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '2000px', border: '4px dashed black' }} />
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
    //</ThemeProvider>
  );
}

export default App;
