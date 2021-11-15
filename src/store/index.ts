// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

// export default function configureStore(initialState = {}) {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Imports: Redux
import rootReducer from './reducers/rootReducer';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['permanent'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['temporary'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
