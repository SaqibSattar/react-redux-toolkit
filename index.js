const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
    return {
      type: CAKE_RESTOCKED,
      payload: qty
    }
}
// (previousState, action) = newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

unsubscribe()