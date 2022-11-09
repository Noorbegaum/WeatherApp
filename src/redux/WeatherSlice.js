import {createSlice} from '@reduxjs/toolkit';
import Data from '../assets/data';

const initialState = Data


export const WeatherSlice = createSlice({
    name: 'weatherdata',
    initialState:{
        value: initialState,
    },
    reducers: {}
})

export const {} = WeatherSlice.actions;

export default WeatherSlice.reducer;