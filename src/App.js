import logo from "./logo.svg";
import "./App.css";
//import Buttonbootstrap from './My/Buttonbootstrap.js';
//import Valuepassfunc from './My/Valuepassfunc';
//import Arrow from './My/Arrow.js';
//import State from './My/State';
//import Condition1 from "./My/Condition1.js";
// import Domedemo from "./My/Domedemo";
// import Domedemonode from "./My/Domedemonode.js";
// import Form from "./My/Form.js";
import Signup from "./My/Signup";

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
          {/* <State></State> */}
          {/* <Condition1></Condition1> */}
          {/* <Domedemo></Domedemo> */}
          {/* <Domedemonode></Domedemonode> */}
          {/* <Form></Form> */}
          <Signup></Signup>
        </p>
      </header>
    </div>
  );
}

export default App;
