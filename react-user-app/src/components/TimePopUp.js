import {useState} from 'react';
import * as React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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
import HttpService from '../services/HttpService';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TimePopUp = (props) => {

    const { open, onClose, id } = props;
    const firstDate = new Date();
    firstDate.setHours(8);
    firstDate.setMinutes(30);
    firstDate.setSeconds(0);

    const [startDate, setStartDate] = React.useState(new Date(firstDate));
    const [endDate, setEndDate] = React.useState(new Date(firstDate));

    const [date, setDate] = React.useState(firstDate);
    const [bookingContact, setBookingContact] = React.useState();
    const [value, setValue] = React.useState('Von');
    const [disable, setDisable] = React.useState(true);
    const [btnText, setbtnText] = React.useState('Bis wählen');
    const [selectText, setSelectText] = React.useState('Ausgewählter Buchnungsstart');
    const[specialInformation, setSpecialInformation] = React.useState('');
    const [radValue, setRadValue] = React.useState('einzel');
    
    const radHandleChange = (event) => {  //Wechsel der RadioButtons
      setRadValue(event.target.value);
    };

    const handleChange = (event, newValue) => {   //Visueller Tab-Switch
      setValue(newValue);
      } 
  
    const closing = () =>{                //Aktionen bei jedlichem schließen des Popups
      setDisable(true);
      setValue('Von');
      setbtnText("Buchen");
      setSpecialInformation("");
      setDate(firstDate);
      onClose();
    }

    const saveDates = () => {               //Aktionen nach dem Drücken von Buchen/Kontaktieren
      setEndDate(date); 
      if(btnText==="Buchen"){compareDates();}
      if(btnText===`${bookingContact} kontaktieren`){contact();}  
    }
    const contact = () =>{
      closing();
    }

    async function compareDates(){
    let bookings = [];
    try{
      bookings = await HttpService.getBookingsByTableId(id);
    }
    catch(err){ bookings = [];} 

      var i = 0;
      var overlap = false;
      var bookedBy
      bookings.forEach(booking => {
        if ((startDate < new Date(bookings[i].bookingEnd)) && (date > new Date(bookings[i].bookingStart))) {
          overlap = true;
          bookedBy = bookings[i].bookedByUser;
          setBookingContact(bookedBy);
        } 
        i++;
      });
      if (overlap){                 //Falls fremde Buchungen überlappen && bookedby != ownId
        setSpecialInformation(`Deine Buchung überlappt mit einer Buchung von ${bookedBy}`);
        setbtnText(`${bookedBy} kontaktieren`);
      }
      /*else if (overlap && bookedBy === ownId ) { Falls eigene Buchungen überlappen
        setSpecialInformation(`Deine Buchung überlappt mit einer anderen eigenen Buchung`);
        setDisabled(true);
      } 
      */
      else{
        if (radValue === "woche") {
          HttpService.postBooking(id, 1, 22, 2, startDate, date, true);
          setRadValue("einzel");
          closing();          
        }
        else{HttpService.postBooking(id, 1, 22, 2, startDate, date, false);
          closing();
        }
      }
    }

    const isDisabled = () => {    //Aktionen beim Tab Wechsel
      if (value === "Von") {
        setDisable(false);
        setbtnText('Buchen');
        setSelectText('Ausgewähltes Buchnungsende');
        setStartDate(date);
        setEndDate(date);
      } 
      else{                       //Bisher nicht abrufbar, wäre abrufbar, wenn man den Starttermin nach dem Endtermin umändern könnte
        setDisable(true);
        setbtnText('Bis wählen');
        setSelectText('Ausgewählter Buchnungsstart');
        setDate(startDate);
      }
    }

    const getMinutes = () =>{
      var minutes = date.getMinutes();
      if (minutes === 0 ){
        return "00";
      }
      else{return minutes;}
    }

  return (
    <div>
        <Dialog open={open} onClose={closing}>
            <DialogTitle>Arbeitsplatz {id}</DialogTitle>
            <DialogContent>
        <Grid container>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant='fullWidth'
              value={value}
              onChange={handleChange}
            >
                <Tab value="Von"label="Von" disabled={!disable} onClick={isDisabled}  />
                <Tab value="Bis"label="Bis" onClick={isDisabled}  />
            </Tabs>
            </Box>
        </Box>
        <h4>{selectText}: { date.getDate() }.{ date.getMonth()+1 }.{ date.getFullYear() } { date.getHours() }:{ getMinutes() } Uhr</h4>
            <DatePicker
                value={date}
                onChange={(theDate) => setDate(theDate)}
                markColor = ""
                format="yyyy-mm-dd"
                fontSize="14"
                markWidth="90%"
            />
        </Grid>
        <FormGroup>
        <RadioGroup
            value={radValue}
            onChange={radHandleChange}
        >
          <FormControlLabel value="einzel" control={<Radio />} label="Einzelbuchung" labelPlacement="start" />
          <FormControlLabel value="woche" control={<Radio />} label="Wöchentliche Buchung" labelPlacement="start" />
          </RadioGroup>
        </FormGroup>
      <h4 style={{ color: 'red' }}>{specialInformation}</h4>
      </DialogContent>
      <DialogActions>
        <Button onClick={closing}>Abbrechen</Button>
        <Button disabled={disable} onClick={saveDates}>  {btnText}  </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default TimePopUp

