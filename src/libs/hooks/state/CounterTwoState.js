import React, { useState } from "react";

function CounterTwoState() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      Counter {count}
    </div>
  );
}

export default CounterTwoState;
