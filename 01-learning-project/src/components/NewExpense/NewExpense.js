import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const extendedExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(extendedExpenseData);

    props.onAddExpense(extendedExpenseData);
  };

  const toggleNewExpenses = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <Card className='new-expense'>
      {!isEditing && <button onClick={toggleNewExpenses}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={toggleNewExpenses} />}
    </Card>
  );
};

export default NewExpense;
