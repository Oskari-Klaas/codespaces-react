import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const dateObj = props.date || props.data.date;

  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;