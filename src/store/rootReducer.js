import {combineReducers} from "redux";
import { authReducer } from "./auth/reducer";
import technicalDocument from "./searchTechnicalDocumentation/reducer";
import { selectedTechnicalDocument } from "./selectedTechnicalDocument/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  technicalDocument,
  selectedTechnicalDocument,
})

export default rootReducer
