import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const initailstate = {};
const middleware = [thunk]

export const store = createStore(rootReducer , initailstate,composeWithDevTools(applyMiddleware(...middleware)))
