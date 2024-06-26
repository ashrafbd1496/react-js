import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

class ClassComponent extends React.Component {
  render() {
    return (
      <h1 className="myclock">Time Showed from Clock Class -{new Date().toLocaleTimeString(this.props.locale)}</h1>
    );
  }
}

function Clock({ locale }) {
  // State to keep track of the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString(locale));

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(locale));
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [locale]);

  return (
    <h1 className="heading">
      <span className="clock">এখন সময় - {currentTime}</span>
    </h1>
  );
}

export default ClassComponent;

// Example of rendering the Clock component
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Clock locale="en-US" />);
