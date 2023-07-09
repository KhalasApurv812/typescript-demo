import { applyMiddleware, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducer";


const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;