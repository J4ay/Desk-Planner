import React from "react";
import Dropdowns from "./Dropdowns";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import TimePopUp from "./TimePopUp";
import UserService from "../services/UserService";
import { fabric } from "fabric";

async function getLayout(room, can) {
  let coords = room.roomWallHandles;
  console.log(room.roomWallHandles);
  console.log(coords.x);

  // Create lines from database
  let lines = [];
  for (var i = 0; i < 21; i++) {
    lines[i] = makeLine([
      coords.x[i] * 0.5 - 50,
      coords.y[i] * 0.5,
      coords.x[i + 1] * 0.5 - 50,
      coords.y[i + 1] * 0.5,
    ]);
  }
  //Connect first and last point in array
  lines[21] = makeLine([
    coords.x[0] * 0.5 - 50,
    coords.y[0] * 0.5,
    coords.x[19] * 0.5 - 50,
    coords.y[19] * 0.5,
  ]);

  let circs = [];
  //create circles at the end of lines
  for (var i = 0; i < 21; i++) {
    circs[i] = makeCircle(coords.x[i],coords.y[i]);
  }

  for (var i = 0; i < lines.length; i++) {
    can.add(lines[i]);
  }
  for (var i = 0; i < circs.length; i++) {
    can.add(circs[i]);
  }
}

function makeCircle(x,y) {
  var c = new fabric.Circle({
      left: x * .5 -50,
      top: y * .5,
      strokeWidth: 5,
      radius: 2,
      fill: "darkgray",
      stroke: "darkgray",
      selectable: false,
      evented: false
  });

  return c;
}

function makeLine(coords) {
  return new fabric.Line(coords, {
    fill: "black",
    stroke: "black",
    strokeWidth: 5,
    selectable: false,
    evented: false,
  });
}

class BookingPlacehold extends React.Component {
  constructor(props) {
    super(props);
    this.state = { room: [], dialogIsOpen: false, id: 0 };
  }
  componentDidMount() {
    HttpService.getRoom(1, 1, 1).then((res) => {
      this.setState({ room: res });
    });

    // Initialize the canvas
    var canvas = (this.__canvas = new fabric.Canvas("c", {
      selection: false,
      height: window.innerHeight,
      width: window.innerWidth,
      borders: "2px solid black",
      backgroundColor: "white",
      fireRightClick: true,
      stopContextMenu: true,
      interactive: false,
    }));
    fabric.Object.prototype.originX = fabric.Object.prototype.originY =
      "center";

    //############################# display the grid #############################
    let grid = 50;
    for (var i = 0; i < 1200 / grid; i++) {
      canvas.add(
        new fabric.Line([i * grid, 0, i * grid, 1200], {
          stroke: "#ccc",
          selectable: false,
          evented: false,
        })
      );
      canvas.add(
        new fabric.Line([0, i * grid, 1200, i * grid], {
          stroke: "#ccc",
          selectable: false,
          evented: false,
        })
      );
    }
  }
  openDialog = (id) => {
    this.setState({ dialogIsOpen: true });
    this.setState({ id: id });
  };

  closeDialog = () => {
    this.setState({ dialogIsOpen: false });
  };

  render() {
    return (
      <Container sx={{ marginTop: "64px" }}>
        <Grid container>
          <Dropdowns />
          <button          onClick={() => {
            getLayout(this.state.room, this.__canvas);
          }}>
            Room 1
          </button>
        </Grid>
        <Container
          sx={{
            position: "fixed",
            minHeight: "70%",
            height: "50%",
            minWidth: "90%",
            width: "90%",
            border: "2px solid black",
          }}
        >
          {/* {this.state.tables.map((table) => {
          return <Box id={table.id} key={table.id} className="table"           
          sx={{
            bgcolor: color(table.occupied),
            marginTop: "15px",
            position: "relative",
            height: "40px",
            width: "40px",
            border: "2px solid navy",
          }}
          onClick={() => {
            this.openDialog(table.id);
            console.log(UserService.getToken());
            HttpService.occupyTable(table.id).then(res => {
              table.occupied = !table.occupied;
              this.forceUpdate();
            });
          }}
          />;
        })} */}
          <canvas id="c" />
        </Container>
        <TimePopUp
          open={this.state.dialogIsOpen}
          onClose={this.closeDialog}
          id={this.state.id}
        />
      </Container>
    );
  }
}

export default BookingPlacehold;
