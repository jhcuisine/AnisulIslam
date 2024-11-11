// const { createStore } = require('redux');

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const initialCounterState = {
//   count: 0,
//   users: {
//     name: 'Jubayer',
//   },
// };

// const incrementCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//         users: { ...state.users, name: 'Robin' },
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//         users: { ...state.users.name, name: 'Jubayer' },
//       };
//     default:
//   }
// };

// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(decrementCounter());

// State - count:0
// Action - increment, decrement, reset
// reducer
// store

// Constands

// const { createStore } = require('redux');

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// const RESET = 'RESET';

// const initialState = {
//   count: 0,
// };

// const incrementAction = () => {
//   return { type: INCREMENT };
// };

// const decrementAction = () => {
//   return { type: DECREMENT };
// };

// const resetAction = () => {
//   return { type: RESET };
// };

// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

// // Creating Reducer

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Store

// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCounterByValue(5));

const { createStore } = require('redux');

const ADD_USER = 'ADD_USER';

const initialState = {
  count: 0,
  users: ['Jubayer'],
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
  }
};

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser(['Robin']));
store.dispatch(addUser(['Rasel']));
store.dispatch(addUser(['Rubel']));
