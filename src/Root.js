import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

/* this is for populating redux store with data retrieved asynchronously
-- respect promises, esentially
*/
//import reduxPromise from "redux-promise";
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

/* this imports reducers directory, but there is index.js there
 so we are getting combineReducers object
*/
import reducers from "reducers";

/* this function is extracted as a separate entity so it can be used
from the testing scripts
*/
// every component with a Connect() expects to see a parent up the chain
// with a Provider wrapper
export default props => {
  // can destructure props here
  const store = createStore(
    reducers,
    props.initialState || {},
    // if payload for one of the actions returned is a promise, reduxPromise
    // will wait on it before calling reducers
    // applyMiddleware(reduxPromise)
    applyMiddleware(async, stateValidator)
  );
  return <Provider store={store}>{props.children}</Provider>;
};

/* Provider works with every connect function to give all of my 
componets direct access to the redux store
*/
