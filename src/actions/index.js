import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from 'actions/types';
import axios from 'axios';

export function saveCommentAction(comment) {
    console.log('flowing through the saveComment action');
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchCommentsAction() {
    console.log('flowing through the fetchComments action');
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    // response is a promise
    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}

export function changeAuthAction(isLoggedIn) {
    console.log('flowing through the changeAuth action');
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}
