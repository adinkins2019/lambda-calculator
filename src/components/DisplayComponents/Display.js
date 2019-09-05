import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = (props) => {
  return <div>{/* Display any props data here */
    <input type="text" value={props.value}/>
  }</div>;
};

export default Display