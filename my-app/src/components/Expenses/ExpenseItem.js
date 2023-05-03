import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const { date, title, amount } = props;
  const [_title, setTitle] = useState(title);
  // title passed inside useState will be the initial value when component is rendered and once its value is updated then every time the component re render it give us updated value always and not the initial value
  const clickHandler = () => {
    setTitle("Updated title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{_title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
}

export default ExpenseItem;

/* References */

/* 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
*/

// useState cannot be called outside the function. It can be called inside the component function
