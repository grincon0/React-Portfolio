import React from "react";
import "./style.css";

const Container = ({ children, ...restProps }) => {
    return (
      <div className="tester" {...restProps}>
        {children}
      </div>
    );
};

export default Container;