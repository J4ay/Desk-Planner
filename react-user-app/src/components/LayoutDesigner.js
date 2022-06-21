import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import BottomNavBar from "./BottomNavBar";
import { fabric } from "fabric";


var points_handler = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
    x5: 0,
    y5: 0,
    x6: 0,
    y6: 0,
    x7: 0,
    y7: 0,
    x8: 0,
    y8: 0,
    x9: 0,
    y9: 0,
    x10: 0,
    y10: 0,
    x11: 0,
    y11: 0,
    x12: 0,
    y12: 0,
    x13: 0,
    y13: 0,
    x14: 0,
    y14: 0,
    x15: 0,
    y15: 0,
    x16: 0,
    y16: 0,
    x17: 0,
    y17: 0,
    x18: 0,
    y18: 0,
    x19: 0,
    y19: 0,
    x20: 0,
    y20: 0,
}

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

function fillPointHandles(id, x, y) {
    switch (id) {
        case 1: points_handler.x1 = x; points_handler.y1 = y; break;
        case 2: points_handler.x2 = x; points_handler.y2 = y; break;
        case 3: points_handler.x3 = x; points_handler.y3 = y; break;
        case 4: points_handler.x4 = x; points_handler.y4 = y; break;
        case 5: points_handler.x5 = x; points_handler.y5 = y; break;
        case 6: points_handler.x6 = x; points_handler.y6 = y; break;
        case 7: points_handler.x7 = x; points_handler.y7 = y; break;
        case 8: points_handler.x8 = x; points_handler.y8 = y; break;
        case 9: points_handler.x9 = x; points_handler.y9 = y; break;
        case 10: points_handler.x10 = x; points_handler.y10 = y; break;
        case 11: points_handler.x11 = x; points_handler.y11 = y; break;
        case 12: points_handler.x12 = x; points_handler.y12 = y; break;
        case 13: points_handler.x13 = x; points_handler.y13 = y; break;
        case 14: points_handler.x14 = x; points_handler.y14 = y; break;
        case 15: points_handler.x15 = x; points_handler.y15 = y; break;
        case 16: points_handler.x16 = x; points_handler.y16 = y; break;
        case 17: points_handler.x17 = x; points_handler.y17 = y; break;
        case 18: points_handler.x18 = x; points_handler.y18 = y; break;
        case 19: points_handler.x19 = x; points_handler.y19 = y; break;
        case 20: points_handler.x20 = x; points_handler.y20 = y; break;
        default: break;
    }
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
            fireRightClick: true,
            stopContextMenu: true,
        }));
        fabric.Object.prototype.originX = fabric.Object.prototype.originY =
            "center";

        function makeCircle(left, top , id, line1, line2, line3, line4) {
            var c = new fabric.Circle({
                id: id,
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

        points_handler.x1 = l.get("x2");
        points_handler.y1 = l.get("y2");

        canvas.add(
            makeCircle(l.get("x2"), l.get("y2"), 1, l, l2),
            makeCircle(l2.get("x2"), l2.get("y2"), 2, l2, l3),
            makeCircle(l3.get("x2"), l3.get("y2"), 3, l3, l4),
            makeCircle(l4.get("x2"), l4.get("y2"), 4, l4, l5),
            makeCircle(l5.get("x2"), l5.get("y2"), 5, l5, l6),
            makeCircle(l6.get("x2"), l6.get("y2"), 6, l6, l7),
            makeCircle(l7.get("x2"), l7.get("y2"), 7, l7, l8),
            makeCircle(l8.get("x2"), l8.get("y2"), 8, l8, l9),
            makeCircle(l9.get("x2"), l9.get("y2"), 9, l9, l10),
            makeCircle(l10.get("x2"), l10.get("y2"), 10, l10, l11),
            makeCircle(l11.get("x2"), l11.get("y2"), 11, l11, l12),
            makeCircle(l12.get("x2"), l12.get("y2"), 12, l12, l13),
            makeCircle(l13.get("x2"), l13.get("y2"), 13, l13, l14),
            makeCircle(l14.get("x2"), l14.get("y2"), 14, l14, l15),
            makeCircle(l15.get("x2"), l15.get("y2"), 15, l15, l16),
            makeCircle(l16.get("x2"), l16.get("y2"), 16, l16, l17),
            makeCircle(l17.get("x2"), l17.get("y2"), 17, l17, l18),
            makeCircle(l18.get("x2"), l18.get("y2"), 18, l18, l19),
            makeCircle(l19.get("x2"), l19.get("y2"), 19, l19, l20),
            makeCircle(l20.get("x2"), l20.get("y2"), 20, l20, l),
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

            //console.log(e.target.id);

            //console.log("object:moving");

            if (
                Math.round((e.target.left / grid) * 4) % 4 === 0 &&
                Math.round((e.target.top / grid) * 4) % 4 === 0
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

            fillPointHandles(e.target.id, p.left, p.top);

            //console.dir(points_handler);

            //canvas.renderAll();
        });


        //TODO: Toggle on "Tisch" Button
        canvas.on('mouse:down', function(options) {
            
            if (!options.target)
               return;

            if (options.button === 3 && options.target.type === 'rect') {
                canvas.remove(canvas.getActiveObject());
                return;
            }

        });

        canvas.on('mouse:dblclick', function(options) {
            if (options.target)
               return;
        
            var rect = new fabric.Rect({
                left: options.e.clientX - 700,
                top: options.e.clientY - 100,
                width: 100,
                height: 60,
                fill: 'rgba(107, 62, 19)',
                snapAngle: 45,
            });
            canvas.add(rect);
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
