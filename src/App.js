import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useEffect, useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "News Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [_expenses, updateExpenses] = useState(expenses);

  useEffect(() => {
    console.log(_expenses);
  }, [_expenses]);

  const addExpenseHandler = (expense) => {
    console.log("in appjs");
    console.log(expense);
    updateExpenses((prevState) => {
      const updatedExpenses = [expense, ...prevState];
      return updatedExpenses;
      // state cannot be directly updated !important
      // prevState.push(expense);
      // return prevState;
    });
    console.log(_expenses);
  };

  return (
    <div>
      <div className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={_expenses} />
      </div>
    </div>
  );
}

export default App;
