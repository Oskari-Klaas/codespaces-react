import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../expenses/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  console.log(filteredYear)

  const filterChangeHandler = (selectedYear) => {
    console.log(SelectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem data={props.items[0]}/>
      <ExpenseItem data={props.items[1]}/>
    </Card>
  );
};

export default Expenses;