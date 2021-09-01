/*********************************************************************************************
 * Description : Configure store for application by proving root reducer.
 **********************************************************************************************/

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// Package used for persist store data when page is refershed.
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiMiddleware from "./middleware/api.middleware";
import { env } from '../config/env';

// set persist configutation 
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    // Define reducers those data need to be retain after refersh of page.
    "global"
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const middleware = env.NODE_ENV !== 'production' ? [thunk, apiMiddleware, logger] : [thunk, apiMiddleware];
  // redux devtools
  const enhancers =
    (env.NODE_ENV === "production")
      ? applyMiddleware(...middleware)
      : compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
  // create redux store
  const store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
