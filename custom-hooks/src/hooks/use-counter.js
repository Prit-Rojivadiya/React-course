import { useState, useEffect } from "react";
// name should always start with 'use'
const useCounter = ({ op }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        op === "inc" ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [op]);

  return counter;
};

export default useCounter;
