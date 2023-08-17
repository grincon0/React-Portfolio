import React, { Component } from "react";
import "./styles/SpanGenerator.css";

export class SpanGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strings: [],
            styledSpans: [],
            animate: false,
        }
    }

    componentDidMount = () => {

        if (this.props.text) {
            const split = this.splitTextProp(this.props.text);
            if (this.props.blocks) {
                let newState = { ...this.state }

                newState.styledSpans = this.getSpanBlocks(split, this.props.blocks);

                this.setState(newState);

            } else {
                this.setState({ strings: split });
            }

        }
    }
    getSpanBlocks = (slicedStrings, arr) => {

        if (slicedStrings !== undefined) {
            const spansArray = [];
            const chars = slicedStrings;
            let counter = 0;

            for (let i = 0; i < chars.length; i++) {

                let elementDisplay = this.checkIfEmpty(chars[i]);
                if (counter < arr.length && arr[counter].from <= i && i <= arr[counter].to) {
                    spansArray.push(<span 
                        id={`s-${i}`} 
                        style={{display:`${elementDisplay}`, animationName:"revealSpan", animationDuration:"0.6s" ,animationTimingFunction:"ease", animationFillMode:"forwards"}} 
                        key={i} 
                        className={arr[counter].classes}>{chars[i]}</span>);

                    if (i === arr[counter].to && arr[counter].completed === false) {
                        arr[counter].completed = true;
                        counter++;
                    }
                } else {
                    spansArray.push(<span style={{ display:`${elementDisplay}`, animationName:"revealSpan", animationDuration:"0.6s" ,animationTimingFunction:"ease", animationFillMode:"forwards" }} id={`s-${i}`} key={i}>{chars[i]}</span>);
                }
            }

            return spansArray;
        } else {
            return;
        }

    }
    checkIfEmpty = (str) => {
        if (!str.replace(/\s/g, '').length) {
            return "inline"
        } else {
            return "inline-block"
        }

    }

    splitTextProp = (text) => {
        return text.split("");
    }
    mapSpans = () => {
        if (this.state.strings !== undefined) {
            return this.state.strings.map((span) => <span>{span}</span>);
        }

    }
    render = () => {
        let spans = !this.state.styledSpans ? this.mapSpans() : this.state.styledSpans;

        return (
            <div id="Span-Container" className={`span-default ${this.props.transition ? "page-is-changing" : ""}`}>
                {spans}
            </div>

        );
    }
}