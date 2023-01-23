import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const extenededExpenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(extenededExpenseData);
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </Card>
  );
};

export default NewExpense;
