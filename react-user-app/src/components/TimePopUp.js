import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from './DatePicker.tsx';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TimePopUp = () => {
    const firstDate = new Date();
    firstDate.setHours(0);
    firstDate.setMinutes(0);
    firstDate.setSeconds(0);
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState(firstDate);
    const [value, setValue] = React.useState('Von');
    const [disable, setDisable] = useState(true);
    const [btnText, setbtnText] = useState('Bis bestätigen');
    const [selectText, setSelectText] = useState('Ausgewählter Buchnungsstart');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event, newValue) => {
    setValue(newValue);
    } 
    const isDisabled = () => {
      if (value === "Von") {
        setDisable(false);
        setbtnText('Speichern');
        setSelectText('Ausgewähltes Buchnungsende');
      } 
      else{
        setDisable(true);
        setbtnText('Bis bestätigen');
        setSelectText('Ausgewählter Buchnungsstart');
      }
      console.dir(date);
    }

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
            <Tabs variant='fullWidth'
              value={value}
              onChange={handleChange}
            >
                <Tab value="Von"label="Von" onClick={isDisabled}  />
                <Tab value="Bis"label="Bis" onClick={isDisabled}  />
            </Tabs>
            </Box>
        </Box>
        <h4>{selectText}: { date.getDate() }.{ date.getMonth() }.{ date.getFullYear() } { date.getHours() }:{ date.getMinutes() } Uhr</h4>
            <DatePicker
                value={date}
                onChange={(theDate) => setDate(theDate)}
                markColor = ""
                format="yyyy-mm-dd"
                fontSize="14"
                markWidth="90%"
            />
        </Grid>
        <h4>Hinweise</h4>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Abbrechen</Button>
        <Button disabled={disable} onClick={handleClose}>  {btnText}  </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default TimePopUp

