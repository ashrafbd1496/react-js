import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AnalogClock from "./componets/AnalogClock/AnalogClock";
import Weather from "./componets/WeatherApp/Weather";


function App() {
  return (
    <>
      <Weather />
    </>
  );
}

export default App;
