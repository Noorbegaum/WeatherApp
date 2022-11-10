import {createSlice} from '@reduxjs/toolkit';
import Data from '../assets/data';
const initialValues = Data;
export const OperationSlice = createSlice({
  name: 'operationdata',
  initialState: {
    value: [],
    favourite:false,
    recent:[],
  },
  reducers: {
    addCity: (state, action) => {
      const val = state.value.map(value => value.id);

      if (val.includes(action.payload.id)) {
        console.log('Already Exhist');
      } else {
        state.value.push(action.payload);
      }
    },
    deleteCity: (state, action) => {
      console.log('inside delete reducer');
      console.log(action.payload.id);
      state.value = state.value.filter(site => site.id !== action.payload.id);
    },
    setFavourite:(state,action)=>{
      state.favourite = action.payload
    },
    addRecentCity:(state,action) =>{
      const val = state.recent.map(value=>value.id)
      if (val.includes(action.payload.id)){
        console.log('Already Exhist');
      }else{
        state.recent.push(action.payload);
      }
      
    },
    deleteRecentCity:(state,action)=>{
      console.log('inside delete reducer');
      console.log(action.payload.id);
      state.recent = state.recent.filter(site => site.id !== action.payload.id);
    },
    filter: (state, action) => {
      state.value = state.filterValue.filter(site =>
        site.sitename.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    removeAll:(state,action)=>{
      state.value=[];
    },
    clearAll:(state,action)=>{
      state.recent=[];
    }
  },
});

export const {addCity, deleteCity,setFavourite,addRecentCity,deleteRecentCity,removeAll,clearAll} = OperationSlice.actions;

export default OperationSlice.reducer;
