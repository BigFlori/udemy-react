import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const items = props.items;
  const [filter, setFilter] = useState("2021");

  const filterChangeHandler = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filter} onFilterChange={filterChangeHandler} />
      {items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
