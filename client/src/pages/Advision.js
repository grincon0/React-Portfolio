import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import {SpanGenerator} from "../components/Customs/index";
import "./styles/Advision.css";

export default class Advision extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                name: "Ad-Vision",
                time: "Early 2019",
                sub: "An ViroReact AR application that renders ads on screen"

            }
        }
    }
    componentDidMount = () => {

    }
    render = () => {
        return (
            <section id="AD-VISION">
                <Flexbox classes={`nav-section`}>
                    <div className={`h2-block`}>
                        <h2>Go back</h2>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-title-box`}>
                    <h1>{this.state.data.name}</h1>
                    <p>{this.state.data.sub}</p>




                </Flexbox>
                <Flexbox classes={`ad-title-lower`}>
                    <div>
                        <span>Period:</span><p>Early 2019</p>
                    </div>
                    <div>
                        <span>Type:</span><p>Mobile Augmented Reality</p>
                    </div>


                </Flexbox>
                <Flexbox>

                </Flexbox>
                <Flexbox>

                </Flexbox>
                <Flexbox>

                </Flexbox>

            </section>
        );
    }


}