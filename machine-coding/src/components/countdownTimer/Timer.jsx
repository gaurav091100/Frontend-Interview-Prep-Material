import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const handleStartOrStop = () => {
    if (intervalRef.current === null) {
      startTimer();
    } else {
      stopTimer();
    }
  };
  const handleResetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <span>Count :- {count}</span>
      <div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
        <button onClick={handleStartOrStop} className="tab-button">
          {intervalRef.current ? "Stop" : "Start"}
        </button>
        <button onClick={handleResetTimer} className="tab-button">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
