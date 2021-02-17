import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const persistedStore = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
