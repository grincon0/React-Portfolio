import React, { Component } from "react";

export class SpanGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strings: [],
            styledSpans: []
        }
    }

    componentDidMount = () => {
        if (this.props.text) {
            const split = this.splitTextProp(this.props.text);
            if (this.props.blocks) {
                let newState = {...this.state}
                console.log(split);
                console.log(this.props.blocks);
                newState.styledSpans = this.getSpanBlocks(split, this.props.blocks);
                this.setState(newState);
                
            } else {
                this.setState({ strings: split });
            }

        }

    }
    componentDidUpdate = () => {
        console.log('comp updated');

    }
    getSpanBlocks = (slicedStrings, { from, to, classes }) => {
        if (slicedStrings !== undefined) {
            return slicedStrings.map((span, i) => {
                if ((from - 1) <= i <= (to - 1)) {
                    return <span key={i} className={classes}>{span}</span>;
                } else {
                    return <span key={i}>{span}</span>;
                }
            }
            );
        } else {
            return;
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
        let spans = this.mapSpans();
        return (
            <div>
                {spans}
            </div>

        );
    }
}