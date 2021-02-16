export const SEARCH_TECHNICAL_DOCUMENT = 'SEARCH_TECHNICAL_DOCUMENT'

export const searchTechnicalDocumentation = (documents) => ({
  type: SEARCH_TECHNICAL_DOCUMENT,
  documents
})
