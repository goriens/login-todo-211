import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { reducer } from "./todos/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

/**
 *
 * @param {redux state} state
 */
//const logger = (state) => (next) => (action) => {
//  console.log("dispatching action,", action, next, state);
//  const val = next(action);
//  console.log("exiting logger");
//  return val;
//};

//const logger2 = (state) => (next) => (action) => {
//  console.log("dispatching action from logger 2,", action, next, state);
//  const val = next(action);
//  console.log("exiting logger2");
//  return val;
//};

//const customMiddleware = (store) => (next) => (action) => {
//  return typeof action === "function"
//    ? action(store.dispatch, store.getState)
//    : next(action);
//};
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
