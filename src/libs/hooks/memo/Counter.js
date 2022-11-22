import React, { useMemo, useState } from "react";

function Counter() {
  const [counerOne, setCounterOne] = useState(0);
  const [counerTwo, setCounterTwo] = useState(0);

  const handleFirstCounter = () => {
    setCounterOne((prev) => prev + 1);
  };

  const handleSecondCounter = () => {
    setCounterTwo((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10 ** 9) i += 1;
    if (counerOne % 2 === 0) return "Even";
    else return "Odd";
  }, [counerOne]);

  return (
    <div>
      <button onClick={handleFirstCounter}>
        Counter one {counerOne} {isEven}
      </button>
      <button onClick={handleSecondCounter}>Counter two {counerTwo}</button>
    </div>
  );
}

export default Counter;
