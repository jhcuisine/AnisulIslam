// // import { useState } from 'react';

// // const Counter = () => {
// //   const [count, setCount] = useState(0);

// //   const handleIncrement = () => {
// //     if (count < 10) {
// //       setCount(count + 1);
// //     } else {
// //       setCount(0);
// //     }
// //   };
// //   const handleDecrement = () => {
// //     if (count > 0) {
// //       setCount(count - 1);
// //     } else {
// //       setCount(10);
// //     }
// //   };
// //   const handleReset = () => {
// //     setCount(0);
// //   };

// //   return (
// //     <div>
// //       <h2>Counter App</h2>
// //       <h1>Count: {count}</h1>
// //       <button onClick={handleIncrement}>Increment</button>
// //       <button onClick={handleDecrement}>Decrement</button>
// //       <button onClick={handleReset}>Reset</button>
// //     </div>
// //   );
// // };

// // export default Counter;

// import { useDispatch, useSelector } from 'react-redux';
// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
// } from '../services/action/CounterAction';

// const Counter = () => {
//   const count = useSelector((state) => state.count);
//   const dispach = useDispatch();

//   const handleIncrement = () => {
//     if (count < 10) {
//       dispach(incrementCounter());
//     } else {
//       dispach(incrementCounter(10));
//     }
//   };
//   const handleDecrement = () => {
//     if (count > 0) {
//       dispach(decrementCounter(0));
//     }
//   };
//   const handleReset = () => {
//     dispach(resetCounter());
//   };

//   return (
//     <div>
//       <h2>Counter App</h2>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default Counter;

// // 1. state
// // apnare kache ki data ache, my data is yes count: 0
// // state - count: 0

// // 2. action - increment, decrement, reset
// /*
// apni ei data niye ki korben ba korte chichen
// ami count: 0 take niye increment or decrement or reset korbo
// */

// // 4. reducer
// // apni ei data niye kivabe kaj korben

// // reducer - increment --> count --> count + 1
// // reducer - decrement --> count --> count - 1
// // reducer - reset --> count --> 0

// // 4. store
// // apni ei data kothai rakhben

// // 5. Providing store in react

// // 6. Use store

import './counter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../services/action/CounterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (count < 10) {
      dispatch(incrementCounter());
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrementCounter());
    }
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div className="box">
      <h2>Counter App</h2>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
