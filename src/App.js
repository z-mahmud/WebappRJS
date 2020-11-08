import logo from './logo.svg';
import './App.css';
//import Buttonbootstrap from './My/Buttonbootstrap.js';
//import Valuepassfunc from './My/Valuepassfunc';
//import Arrow from './My/Arrow.js';
import State from './My/State';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is from app.js
          {/* <Valuepassfunc name="function"></Valuepassfunc> */}
          {/* <Buttonbootstrap></Buttonbootstrap> */}
          {/* <Arrow/> */}
          <State></State>
        </p>
      </header>
    </div>
  );
}

export default App;
