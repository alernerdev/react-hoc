/* state validator according to schema */
import tv4 from 'tv4';
import stateSchema from './stateSchema';

// signature of redux middlewares -- 3 functions
export default ({dispatch, getState}) =>{
    return (next) => { // next middleware
        return (action) => { // the meat of my middleware
            // so we want to pass the action through, and after the state has been 
            // updated, we want to validate it
            next(action);
            const data = getState();
            if (!tv4.validate(data, stateSchema))
                console.warn("Invalid state schema detected from stateValidator middleware!!!!");
        }
    }
}