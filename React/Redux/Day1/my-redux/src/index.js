// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {
    createStore
} from "redux";

console.dir(createStore);
const initialCounterState = 100

const reducer = (state = 0, action) => {
    console.log('From inside reducer:', action);
    switch (action.type) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialCounterState
        default:
            return state
    }
};
const store = createStore(reducer);

console.log(store.getState())

const incrementAction = {
    type: 'Increment'
}

const decrementAction = {
    type: 'Decrement'
}

const resetAction = {
    type: 'Reset'
}

store.dispatch(incrementAction)
console.log(store.getState())

store.dispatch(incrementAction)
console.log(store.getState())

store.dispatch(incrementAction)
console.log(store.getState())

store.dispatch(decrementAction)
console.log(store.getState())

store.dispatch(resetAction)
console.log(store.getState())