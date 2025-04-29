import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function Timer() {
  const [active, setActive] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const stopTimer = () => {
    setActive(false);
  };

  const resumeTimer = () => {
    setActive(true);
  };

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        setSeconds((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [active]);

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resumeTimer}>Resume</button>
    </div>
  );
}
