import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ComplexCounter from './components/ComplexCounter';

function App() {
  return (
    <div className="App">
      <h1>Explore useReducer from Learn with Sumit (LWS)</h1>
      {/* <Counter></Counter> */}
      <ComplexCounter></ComplexCounter>
    </div>

  );
}

export default App;
