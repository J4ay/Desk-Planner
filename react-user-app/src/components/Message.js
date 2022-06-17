import React from "react";
/*import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";*/
/* import { red } from "@mui/material/colors"; */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DangerousIcon from '@mui/icons-material/Dangerous';
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import HttpService from "../services/HttpService";

const Message = (props) => {
  const {messageId, room, sender, content} = props
  return (
<Card sx={{ minWidth: "100%", bgcolor: "#ffffff", marginBottom: "12px" }}>

      <CardContent
       component={Link} to="/chat">
        <Typography variant="h5" component="div">
          von {sender}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          zu Raum {room}
          <br />
          {content}
        </Typography>
            </CardContent>
          <CardActions>
        <Button
          size="small"
          sx={{marginLeft: "auto", marginRight: "0", zIndex: "1" }}
          onClick={() => {
            HttpService.deleteMessage(messageId).then(res => {
              window.location.reload(false);
            });
          }}
        >
          Löschen
        </Button>
      </CardActions>
      <Paper
    >
          <BottomNavigationAction
         // label="Löschen"
          sx={{ position: "fixed", top: 100, left: 700, right: 23, zIndex: "20" }}
         // icon={<DangerousIcon fontSize="large" />}
          label="Löschen"
        />
        </Paper>
    </Card>
    
    /*
    <div className="flex justify-between p-2">
      <h1 className="cursor-pointer">{description}</h1>
      <button>Löschen</button>
    </div>*/
  )
}

export default Message;
