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

const Message = ({description, done}) => {
  return (
<Card sx={{ minWidth: 300, bgcolor: "#ffffff" }}>

      <CardContent>
        <Typography variant="h5" component="div"  sx={{ marginTop: "10px" }}>
          Pinar Gökcek
          <BottomNavigationAction
          sx={{ marginRight: "0" }}
          label="Löschen"
          icon={<DangerousIcon fontSize="large" />}
        />
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          zu Raum 1.EG.111
          <br />
          {"Hallo Pinar, brauchst du heute...."}
        </Typography>
      </CardContent>
      
      <CardActions>
      <BottomNavigationAction
      sx={{ marginLeft: "auto", topRight: "0", marginRight: "0", zIndex: "1" }}
          label="Löschen"
          icon={<DangerousIcon fontSize="large" />}
        />
        <Button
          size="small"
          sx={{ marginLeft: "auto", marginRight: "0", zIndex: "1" }}
        >
          Löschen
        </Button>
      </CardActions>
 
    </Card>
    
    /*
    <div className="flex justify-between p-2">
      <h1 className="cursor-pointer">{description}</h1>
      <button>Löschen</button>
    </div>*/
  )
}

export default Message;
