import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";
import studentsReducer from "./students/reducer"
import subjectsReducer from "./subjects/reducer"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    balance: balanceReducer,
    students: studentsReducer,
    subjects: subjectsReducer
  }),
  enhancer
);

export default store;