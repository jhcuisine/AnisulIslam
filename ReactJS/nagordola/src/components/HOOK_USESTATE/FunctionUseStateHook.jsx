import { useState } from 'react';

const FunctionUseStateHook = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      // 0 < 10
      // 1 < 10
      // 2 < 10
      // 3 < 10
      // 4 < 10
      // 5 < 10
      // 6 < 10
      // 7 < 10
      // 8 < 10
      // 9 < 10
      setCount(count + 1);
      // setCount(1 + 1) = 2
      // setCount(2 + 1) = 3
      // setCount(3 + 1) = 4
      // setCount(4 + 1) = 5
      // setCount(5 + 1) = 6
      // setCount(6 + 1) = 7
      // setCount(7 + 1) = 8
      // setCount(8 + 1) = 9
      // setCount(9 + 1) = 10
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default FunctionUseStateHook;
