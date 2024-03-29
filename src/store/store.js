import { createStore } from "redux";
import searchReducer from "./searchReducer";

const store = createStore(
  searchReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
