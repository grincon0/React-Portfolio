import React, { Component } from "react";
import Flexbox from "../Flexbox/index";
import SVGIcon from "../SVGIcon/index";
import "./styles/photo.css";


export class PhotoSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transition: false,
            currentPhoto: 1
        }
    }

    handleClickEvent = (e) => {
        const { value } = e.target.attributes.value;
        console.log(value)
        if (value === "left") {
            if (this.state.currentPhoto === 1) {
                this.setState({ currentPhoto: 3 });
            } else {
                let decrement = this.state.currentPhoto;
                decrement--;
                this.setState({ currentPhoto: decrement });
            }
        } else {
            if (this.state.currentPhoto === 3) {
                this.setState({ currentPhoto: 1 });
            } else {
                let increment = this.state.currentPhoto;
                increment++;
                this.setState({ currentPhoto: increment });
            }
        }

    }
    changeCurrentPhoto = (value) => {

    }
    render = () => {

        const which = this.state.currentPhoto;
        console.log(which);
        return (
            <Flexbox classes={`photo-slider-parent`}>

                <div className={`photo-slider-box`}>
                    <div className={`photo-button-flex`}>
                        <div className={`photo-button-left`}>
                            <SVGIcon onClick={(e) => this.handleClickEvent(e)} value="left" src="left" width={30} height={30} />
                        </div>

                        <div className={`photo-button-right`}>
                            <SVGIcon onClick={(e) => this.handleClickEvent(e)} value="right" src="right" width={30} height={30} />
                        </div>
                    </div>

                    <div className={`photo-slider slide-on-${which}`}>

                        <div className={`photo-one`}>
                        </div>
                        <div className={`photo-two`}>
                        </div>
                        <div className={`photo-three`}>
                        </div>



                    </div>




                </div>


            </Flexbox>
        );
    }
}