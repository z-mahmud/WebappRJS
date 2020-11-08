import logo from './logo.svg';
import './App.css';
//import Buttonbootstrap from './My/Buttonbootstrap.js';
//import Valuepassfunc from './My/Valuepassfunc';
import Arrow from './My/Arrow.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is viwed app.js
          {/* <Valuepassfunc name="function"></Valuepassfunc> */}
          {/* <Buttonbootstrap></Buttonbootstrap> */}
          <Arrow/>
        </p>
      </header>
    </div>
  );
}

export default App;
