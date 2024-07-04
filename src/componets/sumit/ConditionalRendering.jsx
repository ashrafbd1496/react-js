import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function ConditionalClock() {
  // State to keep track of the current time and locale
  const [locale, setLocale] = useState("bn-BD");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(locale)
  );

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(locale));
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [locale]);

  // Function to toggle the locale between en-US and bn-BD
  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "bn-BD" ? "en-US" : "bn-BD"));
  };

  return (
    <div>
      <h1 className="heading">
        <span className="clock">এখন সময় - {currentTime}</span>
      </h1>
      <button className="changeF" onClick={toggleLocale}>Change Format</button>
    </div>
  );
}

export default ConditionalClock;
