import React from "react";
import Dropdowns from "./Dropdowns";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import TimePopUp from "./TimePopUp";
import { fabric } from "fabric";

class BookingPlacehold extends React.Component {
  constructor(props) {
    super(props);
    this.state = { room: [], dialogIsOpen: false, id: 0 };
  }

  componentDidMount() {
    HttpService.getRoom(1, 4, 4).then((res) => {
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
    let x = this.openDialog;
    canvas.on("mouse:down", function (e) {
      if (e.target) {
        x(e.target.id);
        console.log(e.target.id);
        return;
      }
    });
  }
  openDialog = (id) => {
    this.setState({ dialogIsOpen: true });
    this.setState({ id: id });
  };

  closeDialog = () => {
    this.setState({ dialogIsOpen: false });
  };

  getLayout = (room, can) => {
    can.clear();
    let coords = room.roomWallHandles;

    // Create lines from database
    let lines = [];
    for (let i = 0; i < 21; i++) {
      lines[i] = this.makeLine([
        coords.x[i] * 0.5 - 50,
        coords.y[i] * 0.5,
        coords.x[i + 1] * 0.5 - 50,
        coords.y[i + 1] * 0.5,
      ]);
    }
    //Connect first and last point in array
    lines[21] = this.makeLine([
      coords.x[0] * 0.5 - 50,
      coords.y[0] * 0.5,
      coords.x[19] * 0.5 - 50,
      coords.y[19] * 0.5,
    ]);

    let circs = [];
    //create circles at the end of lines
    for (let i = 0; i < 21; i++) {
      circs[i] = this.makeCircle(coords.x[i], coords.y[i]);
    }

    for (let i = 0; i < lines.length; i++) {
      can.add(lines[i]);
    }
    for (let i = 0; i < circs.length; i++) {
      can.add(circs[i]);
    }

    let desks = room.roomDeskHandles;
    let rects = [];

    for (let i = 0; i < desks.x.length; i++) {
      rects[i] = this.makeRect(
        desks.x[i] * 0.5 - 50,
        desks.y[i] * 0.5,
        i,
        desks.angle[i]
      );
    }

    for (let i = 0; i < rects.length; i++) {
      can.add(rects[i]);
    }

    if (document.getElementsByClassName("upper-canvas")[1])
      document.getElementsByClassName("upper-canvas")[1].remove();
  };

  makeRect = (x, y, id, angle) => {
    let rect = new fabric.Rect({
      left: x,
      top: y,
      width: 100 * 0.5,
      height: 60 * 0.5,
      fill: "rgba(107, 62, 19)",
      id: id,
      angle: angle,
      selectable: false,
      evented: true,
      hoverCursor: "pointer",
    });
    return rect;
  };

  makeCircle = (x, y) => {
    let c = new fabric.Circle({
      left: x * 0.5 - 50,
      top: y * 0.5,
      strokeWidth: 2,
      radius: 1.3,
      fill: "black",
      stroke: "black",
      selectable: false,
      evented: false,
    });

    return c;
  };

  makeLine = (coords) => {
    return new fabric.Line(coords, {
      fill: "black",
      stroke: "black",
      strokeWidth: 5,
      selectable: false,
      evented: false,
    });
  };

  render() {
    return (
      <Container sx={{ marginTop: "64px" }}>
        <Grid container>
          <Dropdowns />
          <button
            onClick={() => {
              this.getLayout(this.state.room, this.__canvas);
            }}
          >
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
            //border: "2px solid black",
          }}
        >
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
