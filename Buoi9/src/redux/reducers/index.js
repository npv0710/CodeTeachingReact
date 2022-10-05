import { combineReducers } from "redux";

import viewReducer from "./viewReducer";

import countReducer from "./countReducer";

const rootReducer = combineReducers({
    view: viewReducer,
    counter: countReducer
})

export default rootReducer;