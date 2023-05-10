import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter({ op: "inc" });
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
