import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Mail from '@mui/icons-material/Mail';
import AddCircle from '@mui/icons-material/AddCircle';
import ViewList from '@mui/icons-material/ViewList';
import Paper from '@mui/material/Paper';

const BottomNavBar = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: "20" }} elevation={4}>
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
  )
}

export default BottomNavBar