import { combineReducers } from "redux";
import { userInfo } from "./userInfo/reducer";

const rootReducer = combineReducers({
  userInfo,
});

export default rootReducer;
