import React, { Component } from "react";
import "./styles/photo.css";

export class PhotoSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transition: false
        }
    }
    render = () => {
        return (
            <div className={`photo-slider-box`}>
                <div className={`photos`}>
                    <div className={`photos-one`}>

                    </div>
                    <div className={`photos-two`}>

                    </div>
                    <div className={`photos-othree`}>

                    </div>
                </div>
            </div>
        );
    }
}