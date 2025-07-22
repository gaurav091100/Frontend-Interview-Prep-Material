import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count >= 10) {
      if (count === 10) {
        alert("Count will increase by 2");
      }
      setCount((prevCount) => prevCount + 2);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const handleDecrement = () => {
    if (count === 0) {
      alert("Count cannot be in negative");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h1>Counter</h1>
      <span>Count :- {count}</span>
      <div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
        <button onClick={handleIncrement} className="tab-button">Increment</button>
        <button onClick={handleDecrement} className="tab-button">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
