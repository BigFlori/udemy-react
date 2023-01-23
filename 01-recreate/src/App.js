import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 245.57,
      date: new Date(2022, 0, 12),
    },
    { id: "e2", title: "New Chair", amount: 85, date: new Date(2021, 11, 5) },
    {
      id: "e3",
      title: "Washing Machine Repair",
      amount: 120.57,
      date: new Date(2021, 5, 17),
    },
    {
      id: "e4",
      title: "New Printer",
      amount: 345.57,
      date: new Date(2021, 10, 4),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('App.js');
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
