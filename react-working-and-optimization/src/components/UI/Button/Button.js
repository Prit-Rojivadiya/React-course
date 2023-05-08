import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button Running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// export default Button;
export default React.memo(Button);

/* 
  Here it will console the statement always when we click the button 
  because in App.js file we update the state, every time App function runs and create new function of onClickHandler
  Thats why Button componet new prop all the time
*/
