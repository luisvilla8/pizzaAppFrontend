import { useState } from "react";

export const useCounter = (initialValue = 0, minValue = 0) => {

  const [counter, setCounter] = useState(initialValue);

  const handleIncrementCounter = () => setCounter(counter + 1);
  const handleDecrementCounter = () => {
    if (counter === minValue) return;
    setCounter(counter - 1);
  }

  return {
    counter,
    handleIncrementCounter,
    handleDecrementCounter,
  }
}
