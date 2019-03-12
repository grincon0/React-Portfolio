import React from "react";
import "./style.css";

const Flexbox = (props) => {

    return (
        <div className={`flex-box ${props.classes ? props.classes : ""}`}>
            {props.children}
        </div>
    );
}

export default Flexbox;