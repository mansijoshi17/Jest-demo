import React from 'react';
// import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';
import CommentBox from 'Component/CommentBox';
import CommentList from 'Component/CommentList';


configure({adapter: new Adapter()});

let Wrapped;

beforeEach(() => {
     Wrapped = shallow(<App/>);
})
it('Shows a CommentBox',() => {
    //const div = document.createElement('div');

    // ReactDOM.render(<App/>,div);

    //   //Look inside the div.
    //   //and checks to see if the CommentBox is in there.
    //   expect(div.innerHTML).toContain('CommentBox');
    // ReactDOM.unmountComponentAtNode(div);


    /*Using Enzyme library*/
    expect(Wrapped.find(CommentBox).length).toEqual(1);
})

it('Shows a CommentList',() => {
    expect(Wrapped.find(CommentList).length).toEqual(1);
})