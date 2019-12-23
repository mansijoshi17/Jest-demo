import {combineReducers} from 'redux';
import CommentsReducer from 'Reducers/Comments';
import AuthReducer from 'Reducers/auth';

export default combineReducers({
    comments:CommentsReducer,
    auth : AuthReducer
})