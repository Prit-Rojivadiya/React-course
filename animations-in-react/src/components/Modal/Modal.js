import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animcationtiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animcationtiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "modalOpen",
        exit: "",
        exitActive: "modalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
    // <Transition
    //   in={props.show}
    //   timeout={animcationtiming}
    //   mountOnEnter
    //   unmountOnExit
    // >
    //   {(state) => {
    //     const cssClasses = [
    //       "Modal",
    //       state === "entering"
    //         ? "modalOpen"
    //         : state === "exiting"
    //         ? "modalClosed"
    //         : null,
    //     ];
    //     return (
    //       <div className={cssClasses.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>
  );
};

export default modal;
