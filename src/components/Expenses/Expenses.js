import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");
  const handleExpenses = (expenseYear) => {
    setFilteredYear(expenseYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter selected={filteredYear} onChangeYear={handleExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
