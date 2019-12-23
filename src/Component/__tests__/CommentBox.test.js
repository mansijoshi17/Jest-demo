import React from 'react';
// import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure , simulate } from 'enzyme';
import CommentBox from 'Component/CommentBox';
import Root from 'root';

configure({ adapter: new Adapter() });

let Wrapped;


beforeEach(() => {
    Wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

it('has a input and a button', () => {
    expect(Wrapped.find('input').length).toEqual(1);
    expect(Wrapped.find('button').length).toEqual(1);
})


it('has a input that user can type in', () => {
    Wrapped.find('input').simulate('change', {
        target: { value: 'new comment' }
    });
    Wrapped.update();

    expect(Wrapped.find('input').prop('value')).toEqual('new comment');
})

it('when form submitted, input get emptied', () => {
    Wrapped.find('input').simulate('change', {
        target: { value: 'new comment' }
    });
    Wrapped.update();
    Wrapped.find('form').simulate('submit');
    Wrapped.update();
    expect(Wrapped.find('input').prop('value')).toEqual('');
})
