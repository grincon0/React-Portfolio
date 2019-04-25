import React, {Component} from "react";
import ReactDOM from 'react-dom';
import lax from "lax.js";

export class Square extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this);
        lax.addElement(this.el);
        console.log(this.el);
      }
      
      componentWillUnmount() {
        lax.removeElement(this.el);
      }

    render = () => {
        return(
            <div className={`lax ${this.props.classes ? this.props.classes : ""}`} data-lax-translate-x={`${this.props.translateX} ${this.props.speed ? this.props.speed : null}`} data-lax-opacity={`${this.props.opacity}`} data-lax-rotate="(vh) 0, (-elh) 500"></div>
        );
    }
   
}