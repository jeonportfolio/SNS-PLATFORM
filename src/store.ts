import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserInfoReducer } from "./reducers/userInfo";
import { feedListReducer } from "./reducers/feedList";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    userInfo:UserInfoReducer,
    feedList:feedListReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk, logger));