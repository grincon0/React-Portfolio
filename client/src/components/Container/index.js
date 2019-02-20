import React from "react";
import "./style.css";

const Container = (props) => {
    return (
        <div className="tester" {...props} >
            {props.children}
        </div>
    );

}

export default Container;