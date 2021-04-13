import logo from "./logo.svg";
import "./App.css";
// import Buttonbootstrap from "./My/Buttonbootstrap.js";
//import Valuepassfunc from './My/Valuepassfunc';
//import Arrow from './My/Arrow.js';
//import State from './My/State';
//import Condition1 from "./My/Condition1.js";
// import Domedemo from "./My/Domedemo";
// import Domedemonode from "./My/Domedemonode.js";
// import Form from "./My/Form.js";
// import Signup from "./My/Signup";
// import Textarea from "./My/Textarea.js";
// import SelecT from "./My/Select.js";
// import List from "./My/List.js";
// import "./My.scss";
// import CountryList from "./My/CountryList.js";
//import Post from "./My/Post.js";
import Myroute from "./component/myroute.js";
import Mynav from "./component/mynav.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="TextStyle">This is from app.js</h1>
          {/* <Valuepassfunc name="function"></Valuepassfunc> */}
          {/* <Buttonbootstrap></Buttonbootstrap> */}
          {/* <Arrow/> */}
          {/* <State></State> */}
          {/* <Condition1></Condition1> */}
          {/* <Domedemo></Domedemo> */}
          {/* <Domedemonode></Domedemonode> */}
          {/* <Form></Form> */}
          {/* <Signup></Signup> */}
          {/* <Textarea></Textarea> */}
          {/* <SelecT></SelecT> */}
          {/* <List></List> */}
          {/* <h1 className="SScssclass">Test</h1> */}
          {/* <Post></Post> */}
          {/* <CountryList></CountryList> */}
          <BrowserRouter>
            <Mynav></Mynav>
            <Myroute></Myroute>
          </BrowserRouter>
        </p>
      </header>
    </div>
  );
}

export default App;
