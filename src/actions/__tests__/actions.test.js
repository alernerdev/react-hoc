import {saveCommentAction} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('saveCommentAction', () => {
    it('has correct type', () => {
        const action = saveCommentAction('');
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has correct payload', () => {
        const action = saveCommentAction('new comment');
        expect(action.payload).toEqual('new comment');
    })

})