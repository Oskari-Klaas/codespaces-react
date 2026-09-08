import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const dateObj = props.date || props.data.date;

  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;