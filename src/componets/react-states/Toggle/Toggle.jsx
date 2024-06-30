import React, { useState } from "react";
import "../style.css";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <button className="onOffBtn" onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
      <div className="onOffdiv">
        <img src={isOn ? "/ONbulb.jpg" : "/OFFbulb.jpg"}
          alt={isOn ? "Bulb is ON" : "Bulb is OFF"}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}
export default Toggle;
