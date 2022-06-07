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

const Message = ({worker, room, description}) => {
  return (
<Card sx={{ minWidth: 300, bgcolor: "#ffffff" }}>

      <CardContent>
        <Typography variant="h5" component="div"  sx={{ marginTop: "10px" }}>
          von {worker}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          zu {room}
          <CardActions>
        <Button
          size="small"
          sx={{left: 650, marginRight: "0", zIndex: "1" }}
        >
          Löschen
        </Button>
      </CardActions>
          <br />
          {description}
        </Typography>
      </CardContent>
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
