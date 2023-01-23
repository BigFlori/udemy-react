import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("hu", { month: "long" });
  const day = props.date.toLocaleString("hu", { day: "2-digit" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{year}</div>
      <div className='expense-date__year'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
