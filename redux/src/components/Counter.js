import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCouter());
  };
  // const incrementHandler = () => {
  //   dispatch(counterActions.increment({ type: "increment" }));
  // };
  // const increaseHandler = () => {
  //   dispatch(counterActions.increase({ type: "increase", value: 5 }));
  // };
  // const decrementHandler = () => {
  //   dispatch(counterActions.decrement({ type: "decrement" }));
  // };

  // const toggleCounterHandler = () => {
  //   dispatch(counterActions.toggleCouter({ type: "toggle" }));
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
