import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        counter: counterReducer
    });
}