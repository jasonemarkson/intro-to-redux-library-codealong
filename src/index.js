// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'; /* code change */
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(counterReducer); /* code change */

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
document.getElementById('root')
);
