import React from "react";
import "./style.css";

const Canvas = (props) => {
    return (
        <div className="canvasBlock">
            <canvas id="canvas">
                {props.children}
            </canvas>
        </div>
    )
}

export default Canvas