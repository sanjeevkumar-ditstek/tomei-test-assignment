import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from "redux-persist/lib/integration/react";
let { store, persistor } = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);

