import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HttpService from "../services/HttpService";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

const Message = (props) => {
  const {messageId, room, sender, content} = props
  return (
    <Link to= {`/chat/${sender}`} style={{textDecoration: "none"}}>
<Card>
  <Container
    sx={{ minWidth: "100%", bgcolor: "#ebebeb", border: "1px solid #e0e0e0", marginBottom: "12px" }}
  >
      <CardContent>
        <Typography variant="h5" component="div">
          Von {sender}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Bezüglich Raum {room}
          <br />
          <br />
          {content}
        </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{marginLeft: "auto", marginRight: "0", zIndex: "1" }}
            onClick={() => {
              HttpService.deleteMessages(messageId).then(res => {
                window.location.reload(false);
            });
          }}
          >
          Löschen
        </Button>
      </CardActions>
      </Container>
          </Card>
          </Link>
  );
};

export default Message;
