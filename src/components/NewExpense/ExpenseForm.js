import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // different approached to update state
  /*     const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // });
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredTitle: event.target.value };
      // });
    };
  
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
    };
  
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredDate: event.target.value,
      // });
    }; */

  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    // If your state update depends on previous state then alway use below approach
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent web page refreshing on submit form
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
      amount: +userInput.amount,
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: 0,
      date: "",
    });
  };

  const onCancleForm = () => {
    props.onCancleForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancleForm}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
