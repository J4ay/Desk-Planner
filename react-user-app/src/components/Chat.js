import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DangerousIcon from '@mui/icons-material/Dangerous';
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import HttpService from "../services/HttpService";

const Chat = ({messagesFromUserId, worker, room, description}) => {
  return (
<Grid>
        <Typography variant="h5" component="div"  sx={{ marginTop: "10px" }}>
         {worker}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          zu {room}

        </Typography>
       
      <Paper
    >

        </Paper>

        </Grid>  

  )
}

export default Chat;
