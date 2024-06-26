import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React js by <span>{firstName + LastName}</span></h1>
        <h1>Today <span>{new Date().toLocaleString()}</span></h1>
      </header>
    </div>
  );
}
const firstName = "Jahid ";
const LastName = "Hasan";
const element = (
  <div>
    <h1>HEllo React</h1>
  </div>
);
let element2 = <div>lorem ipsum</div>;
//console.log(element);
// const rootCont = document.getElementById("root");
// const root = ReactDOM.createRoot(rootCont);
//root.render(element);

export default App;
