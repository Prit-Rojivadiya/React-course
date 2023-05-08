import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => {
        return !prev;
      });
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const listItems = useMemo(() => [3, 4, 1, 2, 5], []);
  // When we use useMemo -> this listItems will be same all the time even if components rerender
  // It will not create new instance every time component re renders
  console.log(listItems);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* <DemoOutput show={false} /> */}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

/* 

if parent component re run then all its child components will rerun. 
In this case for child component does not depend on any state change

If there are nested child components then they also will be reevaluated - That is a performance issue

Solution is for this is useMemo function

*/

// The React useCallback Hook returns a memoized callback function.
