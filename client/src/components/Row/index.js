import React from "react";

const Row = ({fluid, children}) => {
  const className = `row${fluid ? "-fluid" : ""}`;
  return <div className={className}>{children}</div>;
};

export default Row;