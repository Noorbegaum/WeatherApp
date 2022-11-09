import WeatherReducer from "./WeatherSlice";
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OperationReducer from "./OperationSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
  };

const reducer = combineReducers({
    favourites : WeatherReducer,
    operations : OperationReducer
})
const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistRed,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
// export const store = configureStore({
//     reducer: {
//         favourites : WeatherReducer
        
//     },
    
// });
