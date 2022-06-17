import React, { useRef, useEffect } from "react";

const Canvas = props => {

    const canvasRef = useRef(null);

    const draw = (ctx) => {
    }

    useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    let animationFrameId;


    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const render = () => {
        draw(ctx);
        animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
        window.cancelAnimationFrame(animationFrameId);
    }

    }, [draw]);

    return <canvas ref={canvasRef} {...props}/>

}

export default Canvas;