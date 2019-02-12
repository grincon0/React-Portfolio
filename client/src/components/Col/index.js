import React from "react";

export const Col = (props) => {
    return(
        <div className={props.size.split(" ").map(size => "col" + size).join(" ")}>
            {props.children}
        </div>
    );
}