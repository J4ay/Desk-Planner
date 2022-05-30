import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from '@dietime/react-native-date-picker';
import { Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TimePopUp = () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      Open PopUp
    </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Arbeitsplatz 2</DialogTitle>
            <DialogContent>
        <Grid container>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant='fullWidth' aria-label="basic tabs example">
                <Tab label="Von"  />
             <Tab label="Bis"  />
            </Tabs>
            </Box>
        </Box>
            <DatePicker
                value={date}
                onChange={(value) => setDate(value)}
                format="dd-mm-yyyy"
            />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Abbrechen</Button>
        <Button onClick={handleClose}>Speichern</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default TimePopUp