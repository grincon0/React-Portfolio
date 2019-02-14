import React, { Component} from "react";
import { CanvasSpace, Pt, Group } from "pts";


export default class AnimatedCanvas extends Component{
    state = {
        text :"testing",
        init : false
    }
    componentDidMount = () =>{
        this._initializeCanvas();
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

        space.add( () => form.point( space.pointer, 10));
        if(!this.state.init){
            this.setState({init: true});
        }else{
            return;
        }
    }
    render(){

        return(
            <div>
                <canvas id="canvas">
               
                </canvas>
            </div>
        )
    }

}







