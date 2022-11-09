import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Data from '../assets/data';

const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/';

export const getData = createAsyncThunk('weatherdata/getData', async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '85953732d7msh5eb0c447f8596ddp17bfc6jsn39b2ecde3cac',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const response = await fetch(BASE_URL + 'current.json?q=Mysore', options)
  try {
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const WeatherSlice = createSlice({
  name: 'weatherdata',
  initialState: {
    list: [],
    status: null,
  },
  reducers:{
    add: (state, action) => {
        state.list.push(action.payload);
      },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getData.fulfilled]: (state, {payload}) => {
      state.list = payload;
      state.status = 'success';
    },
    [getData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// export const {} = WeatherSlice.actions;

export default WeatherSlice.reducer;
