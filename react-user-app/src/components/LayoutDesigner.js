import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HttpService from "../services/HttpService";
import BottomNavBar from "./BottomNavBar";
import { fabric } from "fabric";

class LayoutDesigner extends React.Component{
    componentDidMount() {
        var canvas = this.__canvas = new fabric.Canvas('c', { 
            selection: false,
            height: window.innerHeight,
            width: window.innerWidth,
            borders: "2px solid black",
            backgroundColor: "white",
        });
        fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
      
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
      
        var l = makeLine([ 250, 100, 700, 100 ]),
            l2 = makeLine([ 700, 100, 700, 400]),
            l3 = makeLine([ 700, 400, 250, 400]),
            l4 = makeLine([ 250, 400, 250, 100 ]);
            //line6 = makeLine([ 250, 175, 325, 225 ]);
      
        canvas.add(l, l2, l3, l4);
      
        canvas.add(
          makeCircle(l.get('x2'), l.get('y2'), l, l2),
          makeCircle(l2.get('x2'), l2.get('y2'), l2, l3),
          makeCircle(l3.get('x2'), l3.get('y2'), l3, l4),
          makeCircle(l4.get('x2'), l4.get('y2'), l4, l),
          //makeCircle(line4.get('x2'), line4.get('y2'), line4)
          //makeCircle(line5.get('x2'), line5.get('y2'), line5)
         // makeCircle(line6.get('x2'), line6.get('y2'), line6)
        );
      
        canvas.on('object:moving', function(e) {
          var p = e.target;
          p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
          p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
          p.line3 && p.line3.set({ 'x2': p.left, 'y2': p.top });
          p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
          canvas.renderAll();
        });
    }
    render(){
        return(
            <Container sx={{ marginTop: "64px", marginBottom: "64px", padding: "12px"}}>
                    {/* Hier sind die Buttons zum Einfügen von Elementen*/}
                    <Box tableIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex" }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Tisch
                        </Button>
                    </Box>
                    <Box wallIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex" }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Wand
                        </Button>
                    </Box>
                    <Box doorIcon
                        sx={{ float: "right", marginRight: "8px", display: "flex", }}
                    >
                        <Button sx={{border: "2px solid black"}}>
                            Tür
                        </Button>
                    </Box>
                    <canvas id="c" backgroundColor="white"/>

                    {/* Hier ist der Button zum Speichern*/}
                <Button
                    size="small"
                    sx={{ float: "right", marginBottom: "88px", marginRight: "8px", zIndex: "1", border: "2px solid black" }}
                >
                    Speichern
                </Button>
                <BottomNavBar />
            </Container>
        );
    };
};

export default LayoutDesigner;