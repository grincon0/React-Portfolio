import React from "react";
import "./style.css";

const Container = (props) => {
    return (
        <div className="tester">
            {props.children}
        </div>

    );

}

export default Container;