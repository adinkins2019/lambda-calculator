import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = (props) => {
  return <div>{/* Display any props data here */
    props.text
  }</div>;
};

export default Display