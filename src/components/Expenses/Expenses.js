import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;
  return (
    <div>
      {expenses.map((expense) => {
        const { date, amount, title, id } = expense;
        return (
          <ExpenseItem date={date} amount={amount} title={title} key={id} />
        );
      })}
    </div>
  );
}

export default Expenses;
