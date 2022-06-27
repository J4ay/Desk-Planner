import React from "react";
import Dropdowns from "./Dropdowns";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import TimePopUp from "./TimePopUp";
import { fabric } from "fabric";


async function getData(room, floor,building) {
  if(room != null && floor != null && building != null) {
  const data = await HttpService.getRoom(room,floor,building);
  return data;}
  else {
    return null;
  }
}


const Booking = () => {

  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const [id, setId] = React.useState(0);
  var [__canvas, setCanvas] = React.useState(null);
  var [room, setRoom] = React.useState(null);
  var [floor, setFloor] = React.useState(null);
  var [building, setBuilding] = React.useState(null);

  React.useEffect( () => {

    // Initialize the canvas
    var canvas =  new fabric.Canvas("c", {
      selection: false,
      height: window.innerHeight,
      width: window.innerWidth,
      borders: "2px solid black",
      backgroundColor: "white",
      fireRightClick: true,
      stopContextMenu: true,
      interactive: false,
    });
    setCanvas(canvas);
    fabric.Object.prototype.originX = fabric.Object.prototype.originY =
      "center";
    
    let x = openDialog;
    let panning;
    let prevX;
    let prevY;

    canvas.on("mouse:down", function (e) {
      if (e.target) {
        x(e.target.id);
        return;
      }
      panning = true;
      if (e.e instanceof TouchEvent) {
        const { clientX, clientY } = e.e.touches[0];
        prevX = clientX;
        prevY = clientY;
      }
    });

    canvas.on("mouse:move", (e) => {
      if (panning) {
        let delta;
        if (e.e instanceof TouchEvent) {
          // we're on mobile
          const { clientX, clientY } = e.e.touches[0];
          delta = new fabric.Point(clientX - prevX, clientY - prevY);
          prevX = clientX;
          prevY = clientY;
        } else {
          // we're on desktop
          delta = new fabric.Point(e.e.movementX, e.e.movementY);
        }
        canvas.relativePan(delta);
      }
    });

    canvas.on("mouse:up", () => {
      panning = false;
    });
  }, []);

  
  const openDialog = (id) => {
    setDialogIsOpen(true);
    setId(id);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
  };

  const getLayout = async (room) => {
    var roomVar = {};

    roomVar = await getData(room, floor, building);

    __canvas.clear();
    let coords = roomVar.roomWallHandles;

    // Create lines from database
    let lines = [];
    for (let i = 0; i < 21; i++) {
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
    for (let i = 0; i < 21; i++) {
      circs[i] = makeCircle(coords.x[i], coords.y[i]);
    }

    for (let i = 0; i < lines.length; i++) {
      __canvas.add(lines[i]);
    }
    for (let i = 0; i < circs.length; i++) {
      __canvas.add(circs[i]);
    }

    let desks = roomVar.roomDeskHandles;
    let rects = [];

    for (let i = 0; i < desks.x.length; i++) {
      rects[i] = makeRect(
        desks.x[i] * 0.5 - 50,
        desks.y[i] * 0.5,
        i,
        desks.angle[i]
      );
    }

    for (let i = 0; i < rects.length; i++) {
      __canvas.add(rects[i]);
    }

    if (document.getElementsByClassName("upper-canvas")[1])
      document.getElementsByClassName("upper-canvas")[1].remove();
  };

  const makeRect = (x, y, id, angle) => {
    let rect = new fabric.Rect({
      width: 100 * 0.5,
      height: 60 * 0.5,
      fill: "rgba(107, 62, 19)",
      angle: angle,
      stroke: "black",
      strokeWidth: 1,
      originX: "center",
      originY: "center",
    });

    var text = new fabric.Text(id.toString(), {
      fontSize: 25,
      originX: "center",
      originY: "center",
      fill: "white",
    });

    var group = new fabric.Group([rect, text], {
      left: x,
      top: y,
      id: id,
      selectable: false,
      evented: true,
      hoverCursor: "pointer",
    });

    return group;
  };

  const makeCircle = (x, y) => {
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

  const makeLine = (coords) => {
    return new fabric.Line(coords, {
      fill: "black",
      stroke: "black",
      strokeWidth: 5,
      selectable: false,
      evented: false,
    });
  };
    return (
      <Container sx={{ marginTop: "64px" }}>
        <Grid container>
          <Dropdowns room={setRoom} floor={setFloor} building={setBuilding} getLayout={getLayout}/>
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
          open={dialogIsOpen}
          onClose={closeDialog}
          id={id}
        />
      </Container>
    );
  
}

export default Booking;
