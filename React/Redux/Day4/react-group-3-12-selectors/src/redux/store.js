import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import postReducer from './postReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    counter: counterReducer,
});
const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

export default store;
