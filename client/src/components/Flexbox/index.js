import React from "react";
import "./style.css";

const Flexbox = (props) => {

    return (
        <div className="flex-box" {...props}>
            {props.children}
        </div>
    );
}

export default Flexbox;