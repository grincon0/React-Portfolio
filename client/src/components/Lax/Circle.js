import React, {Component} from "react";
import ReactDOM from 'react-dom';
import lax from "lax.js";

export class Circle extends Component{
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
            <div className={`lax circle ${this.props.classes ? this.props.classes : ""}`} data-lax-translate-x={`${this.props.translateX} ${this.props.options? this.props.options : null}`} 
            data-lax-opacity={`${this.props.opacity}`} 
            data-lax-rotate={`${this.props.rotate ? "(window.innerHeight*0.6) 0, 2000 1200" : "0 0"}`}></div>
        );
    }
   
}
