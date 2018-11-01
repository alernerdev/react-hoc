import React from 'react';
import {shallow } from 'enzyme';

// using absolute paths relative to the .env specified path
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';

let wrapped; 
beforeEach( ()=>{
    wrapped = shallow(<App />); 
});

it('shows a comment box', ()=>{
    // enzyme find returns an array
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', ()=>{
    // enzyme find returns an array
    expect(wrapped.find(CommentList).length).toEqual(1);
});

