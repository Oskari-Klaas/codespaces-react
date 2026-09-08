import './App.css';
import ExpensiveItem from './components/ExpensiveItem';

const App = () => {
  const expenses = [
  {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  }
]


  return (
    <div className="App">
      <ExpensiveItem data={expenses[0]}/>
      <ExpensiveItem data={expenses[1]}/>
    </div>
  );
}

export default App;
