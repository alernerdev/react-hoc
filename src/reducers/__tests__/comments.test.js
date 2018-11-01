import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handles actions of type SAVE_COMMENT', () =>{
    const currentState = ['hello', 'bye'];
    const action = {payload:'new comment', type:SAVE_COMMENT};
    const newState = commentsReducer(currentState, action);
    console.log(newState);
    expect(newState.length).toEqual(3);
});

it('handles actions with unknown type', () =>{
    const newState = commentsReducer([], {type: 'BLAH'});
    expect(newState).toEqual([]);
});