import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import reducer from "./Redux/reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form"]
};
const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(persistedReducer, composeWithDevTools());
export let persistor = persistStore(store);
