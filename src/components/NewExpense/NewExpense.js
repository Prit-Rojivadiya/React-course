import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [displayForm, setDisplayForm] = useState(false);

  const displayFormHandler = () => {
    setDisplayForm(true);
  };

  const cancleFormHandler = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button type="button" onClick={displayFormHandler}>
          Add New Excpense
        </button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancleForm={cancleFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
