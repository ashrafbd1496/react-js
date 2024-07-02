import React, { useState } from 'react';
import '../style.css'

function CounterStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  }

  const decrement = () => {
    setCount(count - step);
  }
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className='counterStep'>Count: {count}</h1>
      <input 
        type="number" 
        value={step} 
        onChange={(e) => setStep(Number(e.target.value))} 
        placeholder="Step"
      />
      <button className='inc' onClick={increment}>Increment</button>
      <button className='dec' onClick={decrement}>Decrement</button>
      <button className='ctReset' onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterStep;
