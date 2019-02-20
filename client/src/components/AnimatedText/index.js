import React from "react";
import "./style.css";


const AnimatedText = (props) => {

    let animation;

    if(props.anim === "slide-right"){
        animation = props.anim;
    }

    return(
        <div>
            <p className={"default-text" + animation}>{props.text}</p>
        </div>
    );

}

export default AnimatedText;