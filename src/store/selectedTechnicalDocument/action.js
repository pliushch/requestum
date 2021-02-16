export const SELECTED_TECHNICAL_DOCUMENT = "SELECTED_TECHNICAL_DOCUMENT";

export const selectedTechnicalDocument = (document) => ({
  type: SELECTED_TECHNICAL_DOCUMENT,
  document,
});
