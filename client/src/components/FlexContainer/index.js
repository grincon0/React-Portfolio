import React, { Component } from "react";
import "./style.css";

class FlexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: '',
            justify: ''
        }

    }
    componentDidMount = () => {
        this.handleFlexDirection();

    }

    handleFlexDirection = () => {
        let temp = {};

        switch (this.props.direction) {
            case "row":
                temp["direction"] = this.props.direction;
                break;

            case "column":
                temp["direction"] = this.props.direction;
                break;
            default:
                temp["direction"] = "column";
                break;
        }

        this.handleFlexJustify(temp);
    }
    handleFlexJustify = (temp) => {
        switch (this.props.justify) {
            case "center":
                temp["justify"] = this.props.justify;
                break;

            case "end":
                temp["justify"] = this.props.justify;
                break;
            case "between":
                temp["justify"] = this.props.justify;
                break;
            case "around":
                temp["justify"] = this.props.justify;
                break;
            default:
            temp["justify"] = 'start';
                break;
        }

        this.setState(temp);
    }

    render = () => {
        return (
            <div className={`d-flex contain ${this.props.classes} flex-${this.state.direction} ${this.state.justify ? `justify-content-${this.state.justify}` : ""}`} >
                {this.props.children}
            </div>
        );
    }
}

export default FlexContainer;