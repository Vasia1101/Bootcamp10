import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import entities from "../products.json";

const enhancer = composeWithDevTools();

const preloadedState = {
  products: Object.keys(entities.products),
  entities: { ...entities }
};

const store = createStore(rootReducer, preloadedState, enhancer);

export default store;
