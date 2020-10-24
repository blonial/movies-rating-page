import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from './store';

const { store, persistor } = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <div>test</div>
      </PersistGate>
    </Provider>
  );
}

export default App;
