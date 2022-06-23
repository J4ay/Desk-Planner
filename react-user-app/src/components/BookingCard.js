import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HttpService from "../services/HttpService";

function dayCreator(pdate) {
  const date = new Date(pdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if ( day < 10 && month < 10 )
    return `0${day}.0${month}.${year}`;
  if ( day < 10 ) 
    return `0${day}.${month}.${year}`;
  if ( month < 10 )
    return `${day}.0${month}.${year}`;
  else
    return `${day}.${month}.${year}`;
}

function timeCreator(ptime) {
  const time = new Date(ptime);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  if ( minutes === 0 && hours < 10 )
    return `0${hours}:00`;
  if ( minutes === 0) 
    return `${hours}:00`;
  if ( hours < 10 )	
    return `0${hours}:${minutes}`;
  else
    return `${hours}:${minutes}`;
}

const BookingCard = (props) => {
  const {bId, room, table, date, durationStart, durationEnd} = props;
  return (
    <Card 
    sx={{ minWidth: "100%", bgcolor: "#ebebeb", border: "1px solid #e0e0e0", marginBottom: "12px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Raum {room} Arbeitsplatz {table}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Am {dayCreator(date)}
          <br />
          Von {timeCreator(durationStart)} Uhr bis {timeCreator(durationEnd)} Uhr
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ marginLeft: "auto", marginRight: "0", zIndex: "1" }}
          onClick={() => {
            // TODO: delete booking via ConfirmBox
            HttpService.deleteBooking(bId).then(res => {
              window.location.reload(false);
            });
          }}
        >
          Stornieren
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookingCard;
