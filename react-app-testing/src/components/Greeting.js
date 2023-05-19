import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <h2>Hello world!</h2>
      {!changedText && <Output> Its good to see you </Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
