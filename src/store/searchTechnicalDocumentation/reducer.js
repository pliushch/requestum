import { SEARCH_TECHNICAL_DOCUMENT } from "./action";

const initialState = {
  documents: [],
};

const technicalDocument = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TECHNICAL_DOCUMENT:
      return {
        documents: action.documents,
      };
    default:
      return state;
  }
};

export default technicalDocument;
