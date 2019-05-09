import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cart: (state = []) => state
})

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);