import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import postReducer from "./reducers/postReduser";

const rootReducer = combineReducers({
  posts: postReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
