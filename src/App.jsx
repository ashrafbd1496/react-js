import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./componets/Home/Home";
import Blogs from "./componets/Blogs/Blogs";
import StateManagement from "./componets/sumit/StateManagement";

function App() {
  return (
    <>
      <StateManagement locale="bn-BD" />
    </>
  );
}

export default App;
