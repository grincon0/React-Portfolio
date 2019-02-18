import React from "react";
import "./style.css";

const Canvas = (props) => {
    return (
        <div className="canvasBlock" {...props}>
            <canvas id="canvas">
            </canvas>
            {props.children}
        </div>
    )
}

export default Canvas