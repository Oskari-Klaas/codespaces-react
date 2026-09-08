import ExpensiveItem from './ExpensiveItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpensiveItem data={props.data[0]} />
      <ExpensiveItem data={props.data[1]} />
    </div>
  );
};

export default Expenses;