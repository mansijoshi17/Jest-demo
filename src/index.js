import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Component/App';
import { BrowserRouter } from 'react-router-dom';
import Root from 'root';


ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>,
    document.getElementById("root"));