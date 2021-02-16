import { SELECTED_TECHNICAL_DOCUMENT } from "./action";

export const selectedTechnicalDocument = (state = [], action) => {
  if (action.type === SELECTED_TECHNICAL_DOCUMENT) {
    if (!state.find(({ TD_ID }) => action.document.TD_ID === TD_ID)) {
      return [action.document];
    } else {
      return [];
    }
  }
  return state;
};
