import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { thunk } from 'redux-thunk';
import {reducer as themeReducer} from "./Theme/reducer";

const combinedReducer = combineReducers({themeReducer});

const store = legacy_createStore(combinedReducer,applyMiddleware(thunk));

export default store;