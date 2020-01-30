import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notes";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};
