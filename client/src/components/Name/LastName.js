import React, { Component } from "react";
import Flexbox from "../Flexbox/index";
import { TextOverlay } from "../Customs/index";

export class LastName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false
        }
    }
    render = () => {
        return (
            <Flexbox>
                <div className={`Lastname-overlay`}>
                    <TextOverlay
                        text="R"
                        faded={false}
                    />
                    <TextOverlay
                        text="i"
                        faded={false}
                    />
                    <TextOverlay
                        text="n"
                        faded={false}
                    />
                    <TextOverlay
                        text="c"
                        faded={false}
                    />
                    <TextOverlay
                        text="o"
                        faded={false}
                    />
                    <TextOverlay
                        text="n"
                        faded={false}
                    />
                </div>
            </Flexbox>
        )
    }

}