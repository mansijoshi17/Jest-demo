import React from 'react';
import CommentList from 'Component/CommentList';
import {mount} from 'enzyme';
import Root from 'root';


let Wrapped ;

beforeEach(() => {

    const initialState = {
        comments : ['Comment 1', 'Comment 2']
    };

    Wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});

it('create one Li per comment' , () => {
  expect(Wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(Wrapped.render().text()).toContain('Comment 1');
  expect(Wrapped.render().text()).toContain('Comment 2');
})