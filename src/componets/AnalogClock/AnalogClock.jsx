import React, { useEffect, useState } from 'react';
import './AnalogClock.css';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hourStyle = {
    transform: `rotate(${time.getHours() * 30 + time.getMinutes() / 2}deg)`
  };

  const minuteStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`
  };

  const secondStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`
  };

  return (
    <div className="clockContainer">
      <div className="hour" style={hourStyle}></div>
      <div className="minute" style={minuteStyle}></div>
      <div className="second" style={secondStyle}></div>
    </div>
  );
}

export default AnalogClock;
