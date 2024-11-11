// Import Redux
const { createStore, combineReducers } = require('redux');

// Product Constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// Cart Product Constants
const GET_CART_ITEM = 'GET_CART_ITEM';
const ADD_CARD_ITEM = 'ADD_CARD_ITEM';

// Number of Starting Product or Product State
const initialProductState = {
  products: ['Sugar', 'Salt'],
  numberOfProduct: 2,
};

// Number Of Starting Cart or Cart State
const initialCartState = {
  carts: [],
  numberOfCarts: 0,
};

// Show Number of Available Product
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

// Show Number of Available Cart Item
const getCart = () => {
  return {
    type: GET_CART_ITEM,
  };
};

// Add Prouct into InitialProductState

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Add Cart into InitialCartState

const addCart = (cart) => {
  return {
    type: ADD_CARD_ITEM,
    payload: cart,
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

// Cart Logic or Cart Reducer

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };
    case ADD_CARD_ITEM:
      return {
        carts: [...state.carts, action.payload],
        numberOfCarts: state.numberOfCarts + 1,
      };
    default:
      return state;
  }
};

// Root Reducer or Combine All Reducer

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

// Creating a Prouct Store
const store = createStore(rootReducer);

// Notify new Product lists from InitialProductState
store.subscribe(() => {
  console.log(store.getState());
});

// Add Users Defined Product

// store.dispatch(addProduct('Morich'));
// store.dispatch(addProduct('Milk'));
store.dispatch(addCart('Sugar'));
// store.dispatch(addCart('Salt'));
// store.dispatch(addCart('Milk'));
store.dispatch(addProduct('Milk'));
store.dispatch(addCart('Milk'));
