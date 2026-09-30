import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../expenses/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

props.expenses.map((expense) => {
    console.log(expense)
  })

  console.log(filteredYear)

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler}/>
      {
        props.expenses.map((expense) => {
          return <ExpenseItem ExpenseData={expense} key={expense.id} />
        })
      }
    </Card>
  );
};

export default Expenses;