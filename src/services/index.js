import axios from "axios";

export const getTechnicalDocumentation = (value) =>
  axios.get(`${API_URL}/api/Repository/find_td?searchString=${value}`);

export const addArchiveDocument = (id) =>
  axios.post(`${API_URL}/api/Repository/add_arch_doc?tdId=${id}`);

export const searchDocuments = (body) =>
  axios.post(`${API_URL}/api/Repository/search_docs`, body);

// f6ef319f-95ff-4132-81e8-8b9920fed152
