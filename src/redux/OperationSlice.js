import { createSlice } from "@reduxjs/toolkit";
import Data from "../assets/data";
const initialValues= Data
export const OperationSlice = createSlice({
    name: 'operationdata',
    initialState: {
      value:initialValues
    },
    reducers:{
      addCity: (state, action) => {
          state.value.push(action.payload);
        },
        deleteCity: (state, action) => {
            console.log('inside delete reducer')
            console.log(action.payload.id)
            state.value = state.value.filter(site=>site.id !== action.payload.id)
          },
    },

  });
  
  export const {addCity,deleteCity} = OperationSlice.actions;
  
  export default OperationSlice.reducer;