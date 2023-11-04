import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncFunction from './src/component';

export default function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AsyncFunction />
      </PersistGate>
    </Provider>
  );
}
