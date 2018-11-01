import { combineReducers} from 'redux';
// the path is absolute relative to whats in the .env file
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

// pass all of my reducers to the redux function
// and expose this function to the rest of the app
export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});