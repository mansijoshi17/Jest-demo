import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from 'Reducers';

export default ({children , initialState = {} }) => {
    return(
        <Provider store={createStore(Reducer, initialState)}>
            {children}
        </Provider>
    )
}