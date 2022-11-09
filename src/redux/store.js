import WeatherReducer from "./WeatherSlice";
import {configureStore} from '@reduxjs/toolkit';
// import {combineReducers} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        favourites : WeatherReducer
        
    },
    
});
