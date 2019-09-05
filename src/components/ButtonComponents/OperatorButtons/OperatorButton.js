import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <div><button  className="opBtns" value={props.value}>{props.char}</button></div>
      }
    </>
  );
};

export default OperatorButton