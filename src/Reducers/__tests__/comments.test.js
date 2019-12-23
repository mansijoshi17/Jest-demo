import CommentReducer from 'Reducers/Comments';
import {SAVE_COMMENT} from 'Actions/type';

it('handles action of type SAVE_COMMENT' ,() => {
    const action = {
        type : SAVE_COMMENT ,
        payload : 'New Comment'
    };

    const newState = CommentReducer([], action);

    
    expect(newState).toEqual(['New Comment']);
})
