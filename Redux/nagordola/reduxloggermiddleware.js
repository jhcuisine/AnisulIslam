// Import Redux
const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// Product Constants

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// Number of Starting Product or Product State
const initialProductState = {
  products: ['Sugar', 'Salt'],
  numberOfProduct: 2,
};

// Show Number of Available Product
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

// Add Prouct into InitialProductState

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Product Logic or Product Reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

// Creating a Prouct Store
const store = createStore(productReducer, applyMiddleware(logger));

// Notify new Product lists from InitialProductState
store.subscribe(() => {
  console.log(store.getState());
});

// Add Users Defined Product

store.dispatch(getProducts());
store.dispatch(addProduct('Milk'));
