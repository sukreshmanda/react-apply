import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      Count - {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
