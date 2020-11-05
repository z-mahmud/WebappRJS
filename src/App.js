import logo from './logo.svg';
import './App.css';
import Test from './My/Test.js';
import Welcome from './My/Welcome.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this is from App.js file!
          <Test></Test>
          <Test name="Omuk" age="100"></Test>
          <Welcome></Welcome>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
