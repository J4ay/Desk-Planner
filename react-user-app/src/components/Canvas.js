import React, { useRef, useEffect } from "react";

const Canvas = props => {

    const canvasRef = useRef(null);

    const draw = (ctx) => {
        // ctx.clearRect(0, 0, ctx.current.width, ctx.current.height);
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.fill();
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