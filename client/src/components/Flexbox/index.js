import React from "react";
import "./style.css";

const Flexbox = ({ classes, children }) => (
  <div className={`flex-box ${classes ? classes : ""}`}>
    {children}
  </div>
);

export default Flexbox;