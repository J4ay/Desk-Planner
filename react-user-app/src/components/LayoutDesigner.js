import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BottomNavBar from "./BottomNavBar";
import {fabric} from "fabric";
import { height } from "@mui/system";

function addCircle(canvas, left, top, line1, line2, line3, line4) {
    var c = new fabric.Circle({
        left: left,
        top: top,
        radius: 12,
        fill: 'red',
    });
    c.hasControls = c.hasBorders = false;

    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;
    c.line4 = line4;

    canvas.add(c);
    canvas.renderAll();
}

class LayoutDesigner extends React.Component{

    componentDidMount(){
    var canvas = this.__canvas = new fabric.Canvas('c', { 
        selection: false, 
        height: window.innerHeight - 64,
        width: window.innerWidth - 1700,
        hasBorders: true,
        hasControls: true,
        backgroundColor: '#c7c7c7',
    });
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

    canvas.on("after:render", function(){ canvas.calcOffset() });   

    function makeCircle(left, top, line1, line2, line3, line4) {
      var c = new fabric.Circle({
        left: left,
        top: top,
        strokeWidth: 5,
        radius: 12,
        fill: '#fff',
        stroke: '#666'
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
        fill: 'red',
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        evented: false,
      });
    }
  
    var line = makeLine([ 250, 125, 250, 175 ]),
        line2 = makeLine([ 250, 175, 250, 250 ]),
        line3 = makeLine([ 250, 250, 300, 350]),
        line4 = makeLine([ 250, 250, 200, 350]),
        line5 = makeLine([ 250, 175, 175, 225 ]),
        line6 = makeLine([ 250, 175, 325, 225 ]);
  
    canvas.add(line, line2, line3, line4, line5, line6);
  
    canvas.add(
      makeCircle(line.get('x1'), line.get('y1'), null, line),
      makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
      makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
      makeCircle(line3.get('x2'), line3.get('y2'), line3),
      makeCircle(line4.get('x2'), line4.get('y2'), line4),
      makeCircle(line5.get('x2'), line5.get('y2'), line5),
      makeCircle(line6.get('x2'), line6.get('y2'), line6)
    );
  
    canvas.on('object:moving', function(e) {
      var p = e.target;
      p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
      p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
      p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
      p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
      canvas.renderAll();
    });

    canvas.on('mouse:down', function(e) {
        var p = e.target;
        addCircle(canvas, e.e.clientX, e.e.clientY, line, line2, line3, line4);
        console.log(e.e.clientX, e.e.clientY);
    });

    }

    render(){
        return(
            <Container sx={{ marginTop: "64px", marginBottom: "64px", padding: "12px"}}>
                    {/* Hier sind die Buttons zum Einfügen von Elementen*/}
                    <Box tableIcon
                        sx={{ float: "right", display: "flex", alignItems: "left", border: "2px solid black" }}
                    >
                        <Button>
                            Tisch
                        </Button>
                    </Box>
                    <Box wallIcon
                        sx={{ float: "right", display: "flex", border: "2px solid black" }}
                    >
                        <Button
                        onClick={() => {
                            addCircle(this.__canvas, 500, 500, null, null, null, null);
                        }}
                        >
                            Wand
                        </Button>
                    </Box>
                    <Box doorIcon
                        sx={{ float: "right", display: "flex", border: "2px solid black" }}
                    >
                        <Button>
                            Tür
                        </Button>
                    </Box>
                <Container>
                    <canvas
                        ref={(canvas) => { this.__canvas = canvas; }}
                        id="c"	
                    >
                    </canvas>
                </Container>
                    {/* Hier ist der Button zum Speichern*/}
                <Button
                    size="small"
                    sx={{ float: "right", marginRight: "0", zIndex: "1", border: "2px solid black" }}
                >
                    Speichern
                </Button>
                <BottomNavBar />
            </Container>
        );
    };
};

export default LayoutDesigner;