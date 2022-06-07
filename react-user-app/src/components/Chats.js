import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BookingCard from "./BookingCard";
import Message from "./Message";
//import TopAppBarMessages from "./TopAppBarMessages";
import BottomNavBar from "./BottomNavBar";
import Chat from "./Chat";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TopAppBarChat from "./TopAppBarChat";
import { TextField } from "@mui/material";



  class Chats extends React.Component{
    constructor(props) {
      super(props);
      this.state = {Chats: []};
    }
   /* componentDidMount() {
      HttpService.getMessages().then(res => {
        this.setState({ Messages: res });
      });
    }*/

  render() 
{
  return (
    
    <Container
      sx={{ marginTop: "80px", marginRight: "200px"}}
    >
          
<Grid sx={{ marginTop: "100px"}}>
<Box component="span" sx ={{p: 2, border: '1px dashed grey'}}>Hallo, brauchst du den Raum...</Box>
    </Grid>
    <Grid sx={{ marginTop: "50px"}}>
<Box component="span" sx ={{p: 2, border: '1px dashed grey'}}>me: Nein, kannst du haben</Box>
    </Grid>
    <Grid sx={{ marginTop: "300px"}}>
    <Typography variant="h5" component="div"  sx={{ marginTop: "10px" }}>

        </Typography>
        <TextField id="outlined-basic" label="Your Message" variant="outlined" />
      <IconButton
       size="large"
        >
         <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
        </IconButton>

    </Grid>
    </Container>

  );}
};

export default Chats;

