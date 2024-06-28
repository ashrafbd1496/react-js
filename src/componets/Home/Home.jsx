import "./Home.css";
import React, { useState, useEffect } from "react";

function Home() {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
  // Effect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  /*  
    element = {
        type: 'h1',
        props: {
            className: 'heading'
            tabIndex: 0,
            children: 'Allahu AKbar'
        }
    }
    */
  //write jsx and pass parameter by sumit
  function getGreeting(user) {
    //user is parameter
    if (user) {
      return <h3>Name {user}! is changable</h3>;
    }
    return <h3>Hello Stranger</h3>;
  }
  const element2 = <h3>Hello {getGreeting("Ashraf")}</h3>; //remove argument asrhaf -Stranger will show
  return (
    <div>
      {element2}
      <span className="time-now">{timeNow}</span>
    </div>
  );
}
export default Home;
