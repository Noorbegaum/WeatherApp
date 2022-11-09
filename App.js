
import React from 'react';
import MyDrawer from './src/navigation/Drawer';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
      <MyDrawer />
      </PersistGate>
    </Provider>
  );
};

export default App;
