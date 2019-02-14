import React, { Component} from "react";
import { CanvasSpace, Pt, Group } from "pts";
import PtsCanvas from "react-pts-canvas"


export class AnimatedCanvas extends Component{
    state = {
        text :"testing"
    }
    _initializeCanvas = () => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#fff"});
        this._initializeForm(space);

    }
    _initializeForm = (space) => {
        const form = space.getForm();
        this._createTestPoint(space, form);

    }
    _createTestPoint = (space, form) => {

        space.add( () => form.point( space.pointer, 10)  )
    }
    render(){
        return(
            <div>
                <canvas id="canvas">
                {this._initializeCanvas()}
                </canvas>
            </div>
        )
    }

}







