import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(true);
  const interval = useRef(null);

  useEffect(() => {
    if (timerStatus)
      interval.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [timerStatus]);

  return (
    <div>
      Timer - {timer}
      <br />
      <button
        onClick={() => {
          clearInterval(interval.current);
          setTimerStatus((prev) => prev !== true);
        }}
      >
        {timerStatus === true ? "Stop Taimer" : "Start Timer"}
      </button>
    </div>
  );
}

export default Timer;
