import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log("demo output");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
}

export default React.memo(DemoOutput);

/* 

  React.memo will check that if new props are different from prev props. 
  If the are different than component will re evaluated

  eg. props.show === props.prev.shoe => it will give return true for premitive value
  but if there is same function we are passing in props which is not premitive then this 
  comparison will return false because every time we will get new non premitive instance
  
  if there is a function. new object will create every time component render for the same function. 
  So comparison will be false all the time and React.memo() will not work in that case
*/
