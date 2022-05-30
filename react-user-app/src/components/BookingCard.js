import * as React from "react";
//import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const BookingCard = (props) => {
  const {room, date, duration} = props;
  return (
    <Card sx={{ minWidth: 300, bgcolor: "#ffffff" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {room}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          {date}
          <br />
          {duration}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ marginLeft: "auto", marginRight: "0", zIndex: "1" }}
        >
          Stornieren
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookingCard;
