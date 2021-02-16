import {combineReducers} from "redux";
import { reducer } from "./getDistsInfo/reducer";

const rootReducer = combineReducers({
  reducer: reducer
})

export default rootReducer
