import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import userReduser from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReduser from "./reducers/uiReducer";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReduser,
  data: dataReducer,
  UI: uiReduser
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
