
import React from 'react';
import MyDrawer from './src/navigation/Drawer';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
  );
};

export default App;
