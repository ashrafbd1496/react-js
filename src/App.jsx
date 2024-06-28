import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from './componets/Home/Home'
import Blogs from './componets/Blogs/Blogs'
import Clock from './componets/sumit/Clock'

function App() {
  return (
    <>
      <Clock locale= "bn-BD"/>
    </>
  );
}

export default App;
