import React from "react";
//import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import TopAppBarMessages from "./TopAppBarMessages";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import HttpService from "../services/HttpService";




  class Chats extends React.Component{
    constructor(props) {
      super(props);
      this.state = {chats: [], chatsIncoming: [], messageValue: []};
    }
    componentDidMount() {
      var sender = "Jay";
      var receiver = "Kyle";

      HttpService.getMessagesBySenderAndReceiver(sender, receiver).then(res => {
        this.setState({ chats: res });
      });  
      HttpService.getMessagesBySenderAndReceiver(receiver, sender).then(res => {
        this.setState({ chatsIncoming: res });
      });
    }

    _handleMessageFieldChange = (event) => {
      this.setState({messageValue: event.target.value});
    }

  render() 
{
  return (
    
    <Container
      sx={{ marginTop: "80px", marginRight: "200px"}}
    >
          
<Grid sx={{ marginTop: "100px"}}>
  {this.state.chats.map((chat) =>{
    return <Grid sx={{ marginTop: "50px"}}> 
    <Box component="span" sx ={{p: 2, border: '1px dashed blue'}}>{chat.messageContent}</Box>
    </Grid>
  })}
   {this.state.chatsIncoming.map((chat) =>{
   return <Grid sx={{ marginTop: "50px"}}> 
   <Box component="span" sx ={{p: 2, border: '1px dashed grey'}}>{chat.messageContent}</Box>
   </Grid>
  })}
    </Grid>
   
    <Grid sx={{ marginTop: "50px"}}>
         
        <TextField value={this.state.messageValue} onChange={this._handleMessageFieldChange} id="outlined-basic" label="Your Message" variant="outlined" />
      <IconButton size="large" onClick={() => HttpService.postMessage(1, "Jay", "Kyle", this.state.messageValue, new Date(), 1, 1)} >
         <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
        </IconButton>

    </Grid>
    </Container>

  );}
};

export default Chats;

