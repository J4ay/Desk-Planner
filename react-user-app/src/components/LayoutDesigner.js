import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BottomNavBar from "./BottomNavBar";
import { fabric } from "fabric";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import UserService from "../services/UserService";
import LoginIcon from "@mui/icons-material/Login";

class LayoutDesigner extends React.Component {
  componentDidMount() {
    var canvas = (this.__canvas = new fabric.Canvas("c", {
      selection: false,
      height: window.innerHeight,
      width: window.innerWidth,
      borders: "2px solid black",
      backgroundColor: "white",
    }));
    fabric.Object.prototype.originX = fabric.Object.prototype.originY =
      "center";

    function makeCircle(left, top, line1, line2, line3, line4) {
      var c = new fabric.Circle({
        left: left,
        top: top,
        strokeWidth: 5,
        radius: 12,
        fill: "#fff",
        stroke: "#666",
      });
      c.hasControls = c.hasBorders = false;

      c.line1 = line1;
      c.line2 = line2;
      c.line3 = line3;
      c.line4 = line4;

      return c;
    }

    function makeLine(coords) {
      return new fabric.Line(coords, {
        fill: "red",
        stroke: "red",
        strokeWidth: 5,
        selectable: false,
        evented: false,
      });
    }

    var l = makeLine([250, 100, 700, 100]),
      l2 = makeLine([700, 100, 700, 400]),
      l3 = makeLine([700, 400, 250, 400]),
      l4 = makeLine([250, 400, 250, 100]);
    //line6 = makeLine([ 250, 175, 325, 225 ]);

    canvas.add(l, l2, l3, l4);

    canvas.add(
      makeCircle(l.get("x2"), l.get("y2"), l, l2),
      makeCircle(l2.get("x2"), l2.get("y2"), l2, l3),
      makeCircle(l3.get("x2"), l3.get("y2"), l3, l4),
      makeCircle(l4.get("x2"), l4.get("y2"), l4, l)
      //makeCircle(line4.get('x2'), line4.get('y2'), line4)
      //makeCircle(line5.get('x2'), line5.get('y2'), line5)
      // makeCircle(line6.get('x2'), line6.get('y2'), line6)
    );

    canvas.on("object:moving", function (e) {
      var p = e.target;
      p.line1 && p.line1.set({ x2: p.left, y2: p.top });
      p.line2 && p.line2.set({ x1: p.left, y1: p.top });
      p.line3 && p.line3.set({ x2: p.left, y2: p.top });
      p.line4 && p.line4.set({ x1: p.left, y1: p.top });
      canvas.renderAll();
    });
  }
  render() {
    return (
      <Container
        sx={{ marginTop: "64px", marginBottom: "64px", padding: "12px" }}
      >
        <Paper
          sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: "20" }}
          elevation={1}
        >
          <AppBar position="static" sx={{ fontSize: 72, bgcolor: "#003366" }}>
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Buchen
              </Typography>
              <Button
                sx={{ border: "2px solid black", backgroundColor: "white" }}
              >
                Tisch
              </Button>

              <Button
                sx={{ border: "2px solid black", backgroundColor: "white" }}
              >
                Wand
              </Button>

              <Button
                sx={{ border: "2px solid black", backgroundColor: "white" }}
              >
                Tür
              </Button>

              <Button
                sx={{ border: "2px solid black", backgroundColor: "white" }}
              >
                Speichern
              </Button>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <LaptopChromebookIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <LoginIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Paper>

        {/* Hier sind die Buttons zum Einfügen von Elementen*/}
        
        <canvas id="c" backgroundColor="white" />

        {/* Hier ist der Button zum Speichern*/}

        <BottomNavBar />
      </Container>
    );
  }
}

export default LayoutDesigner;
