import React from "react";

const Col = (props) => (
  <div className={props.size.split(" ").map(size => "col" + size).join(" ")}>
    {props.children}
  </div>
);

export default Col;