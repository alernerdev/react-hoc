/* asynchronous action creators handling, a replacement for redux-promisee */

// signature of redux middlewares -- 3 functions
export default ({dispatch}) =>{
    return (next) => { // next middleware
        return (action) => { // the meat of my middleware
            // check to see if action has a promise on the payload
            // (does the payload have a then function)
            if (!action.payload || !action.payload.then) {
                return next(action);
            }

            // so it is a promise, resolve it and create a new action to dispatch
            action.payload.then((response)=>{
                // copy over all props, and override the payload
                const newAction = {...action, payload: response};
                dispatch(newAction);
            })
        }
    }
}