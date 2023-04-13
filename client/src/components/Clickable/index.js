import React from "react";
import "./style.css";

const Clickable = (props) => (
  <div className="clickable">
    <p style={{ fontSize: "20px", display: "inline", left: "35%" }}>See my work</p>
    <i className="fa fa-arrow-right turn-arrow " aria-hidden="false"></i>
  </div>
);

export default Clickable;