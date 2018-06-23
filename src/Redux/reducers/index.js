import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import userReducer from "./userReducer";

const reducer = combineReducers({ users: userReducer, form });

export default reducer;
