import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import BottomNavBar from "./BottomNavBar";
import { fabric } from "fabric";

function addDesk(canvas, left, top) {
    var d = new fabric.Rect({
        left: left,
        top: top,
        fill: 'brown',
        width: 20,
        height: 20
    });

    d.hasControls = d.hasBorders = false;

    canvas.add(d);
    canvas.renderAll();
    //canvas.render();
}

function saveCanvas(canvas) {
    console.log(canvas.toJSON());
}

class LayoutDesigner extends React.Component {

    componentDidMount() {
        var canvas = (this.__canvas = new fabric.Canvas("c", {
            selection: false,
            height: window.innerHeight,
            width: window.innerWidth * 0.8,
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
                evented: true,
            });
        }

        var start_x = 200;      //adjust where to start the basic wallshape on the x axis
        var start_y = 150;      //adjust where to start the basic wallshape on the y axis
        var point_gap = 150;    //adjust the distance between the points on the wallshape

        var l = makeLine([start_x, start_y, start_x + point_gap, start_y]),
            l2 = makeLine([start_x + point_gap, start_y, start_x + (2 * point_gap), start_y]),
            l3 = makeLine([start_x + (2 * point_gap), start_y, start_x + (3 * point_gap), start_y]),
            l4 = makeLine([start_x + (3 * point_gap), start_y, start_x + (4 * point_gap), start_y]),
            l5 = makeLine([start_x + (4 * point_gap), start_y, start_x + (5 * point_gap), start_y]),

            l6 = makeLine([start_x + (5 * point_gap), start_y, start_x + (5 * point_gap), start_y + point_gap]),
            l7 = makeLine([start_x + (5 * point_gap), start_y + point_gap, start_x + (5 * point_gap), start_y + (2 * point_gap)]),
            l8 = makeLine([start_x + (5 * point_gap), start_y + (2 * point_gap), start_x + (5 * point_gap), start_y + (3 * point_gap)]),
            l9 = makeLine([start_x + (5 * point_gap), start_y + (3 * point_gap), start_x + (5 * point_gap), start_y + (4 * point_gap)]),
            l10 = makeLine([start_x + (5 * point_gap), start_y + (4 * point_gap), start_x + (5 * point_gap), start_y + (5 * point_gap)]),

            l11 = makeLine([start_x + (5 * point_gap), start_y + (5 * point_gap), start_x + (4 * point_gap), start_y + (5 * point_gap)]),
            l12 = makeLine([start_x + (4 * point_gap), start_y + (5 * point_gap), start_x + (3 * point_gap), start_y + (5 * point_gap)]),
            l13 = makeLine([start_x + (3 * point_gap), start_y + (5 * point_gap), start_x + (2 * point_gap), start_y + (5 * point_gap)]),
            l14 = makeLine([start_x + (2 * point_gap), start_y + (5 * point_gap), start_x + point_gap, start_y + (5 * point_gap)]),
            l15 = makeLine([start_x + point_gap, start_y + (5 * point_gap), start_x, start_y + (5 * point_gap)]),

            l16 = makeLine([start_x, start_y + (5 * point_gap), start_x, start_y + (4 * point_gap)]),
            l17 = makeLine([start_x, start_y + (4 * point_gap), start_x, start_y + (3 * point_gap)]),
            l18 = makeLine([start_x, start_y + (3 * point_gap), start_x, start_y + (2 * point_gap)]),
            l19 = makeLine([start_x, start_y + (2 * point_gap), start_x, start_y + point_gap]),
            l20 = makeLine([start_x, start_y + point_gap, start_x, start_y]);
        //line6 = makeLine([ 250, 175, 325, 225 ]);


        canvas.add(l, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20);

        canvas.add(
            makeCircle(l.get("x2"), l.get("y2"), l, l2),
            makeCircle(l2.get("x2"), l2.get("y2"), l2, l3),
            makeCircle(l3.get("x2"), l3.get("y2"), l3, l4),
            makeCircle(l4.get("x2"), l4.get("y2"), l4, l5),
            makeCircle(l5.get("x2"), l5.get("y2"), l5, l6),
            makeCircle(l6.get("x2"), l6.get("y2"), l6, l7),
            makeCircle(l7.get("x2"), l7.get("y2"), l7, l8),
            makeCircle(l8.get("x2"), l8.get("y2"), l8, l9),
            makeCircle(l9.get("x2"), l9.get("y2"), l9, l10),
            makeCircle(l10.get("x2"), l10.get("y2"), l10, l11),
            makeCircle(l11.get("x2"), l11.get("y2"), l11, l12),
            makeCircle(l12.get("x2"), l12.get("y2"), l12, l13),
            makeCircle(l13.get("x2"), l13.get("y2"), l13, l14),
            makeCircle(l14.get("x2"), l14.get("y2"), l14, l15),
            makeCircle(l15.get("x2"), l15.get("y2"), l15, l16),
            makeCircle(l16.get("x2"), l16.get("y2"), l16, l17),
            makeCircle(l17.get("x2"), l17.get("y2"), l17, l18),
            makeCircle(l18.get("x2"), l18.get("y2"), l18, l19),
            makeCircle(l19.get("x2"), l19.get("y2"), l19, l20),
            makeCircle(l20.get("x2"), l20.get("y2"), l20, l),
            //makeCircle(line4.get('x2'), line4.get('y2'), line4)
            //makeCircle(line5.get('x2'), line5.get('y2'), line5)
            // makeCircle(line6.get('x2'), line6.get('y2'), line6)
        );

        let grid = 50;

        // Grid display part
        for (var i = 0; i < 1200 / grid; i++) {
            canvas.add(
                new fabric.Line([i * grid, 0, i * grid, 1200], {
                    stroke: "#ccc",
                    selectable: false,
                })
            );
            canvas.add(
                new fabric.Line([0, i * grid, 1200, i * grid], {
                    stroke: "#ccc",
                    selectable: false,
                })
            );
        }

        canvas.on("object:moving", function (e) {
            var p = e.target;

            if (
                Math.round((e.target.left / grid) * 4) % 4 == 0 &&
                Math.round((e.target.top / grid) * 4) % 4 == 0
            ) {
                e.target
                    .set({
                        left: Math.round(e.target.left / grid) * grid,
                        top: Math.round(e.target.top / grid) * grid,
                    })
                    .setCoords();
            }
            p.line1 && p.line1.set({ x2: p.left, y2: p.top });
            p.line2 && p.line2.set({ x1: p.left, y1: p.top });
            p.line3 && p.line3.set({ x2: p.left, y2: p.top });
            p.line4 && p.line4.set({ x1: p.left, y1: p.top });

            //canvas.renderAll();
        });



    }
    render() {
        return (
            <Container
                sx={{ marginTop: "64px", marginBottom: "64px", padding: "12px" }}
            >
                <div class="layoutButtonDiv">
                    <Button
                        variant="contained"
                        sx={{ border: "2px solid black" }}
                        onClick={() => { addDesk(this.__canvas, 300, 300); }}
                    >
                        Tisch
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ border: "2px solid black" }}
                    >
                        Wand
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ border: "2px solid black" }}
                    >
                        Tür
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ border: "2px solid black", float: "right" }}
                        onClick={() => {
                            //saveCanvas(this.__canvas);
                            //var cnv = document.getElementById("c");
                            //var json = cnv.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
                            //console.log(json);
                        }}
                    >
                        Speichern
                    </Button>
                </div>



                {/* Hier sind die Buttons zum Einfügen von Elementen*/}

                <canvas id="c" />

                {/* Hier ist der Button zum Speichern*/}
                <BottomNavBar />
            </Container>
        );
    }
}

export default LayoutDesigner;
