import './App.css';
import ExpensiveItem from './components/ExpensiveItem';

const App = () => {

  const date = new Date(2026, 8, 2)
  const title = 'New book'
  const price = 30.99
  return (
    <div className="App">
      <ExpensiveItem
       date={date}
       title={title}
       price={price}
      />

    </div>
  );
}

export default App;
