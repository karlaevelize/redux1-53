## Actions

- objects with two values: type, payload
- type: string -> matches a case in the reducer
- payload: data
- triggered (dispatched) by the user 

## Reducer

- decides what to do with the data
- process the data
- updates the state

## Selectors

- selects the date from Redux state
- then you can display it on the screen

## Setting up a React-Redux app**

1. `npx create-react-app`
2. Install Redux with `npm i react-redux`
3. Create Redux store, something like:

```js
// src/store/index.js
import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    balance: balanceReducer,
  }),
  enhancer
);

export default store;
```

4. Write a reducer with something in the Initial State

```js
// src/store/balance/reducer.js
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
```

5. Check the Redux Store on Chrome to make sure you can already see yourr state

6. Happy coding :)