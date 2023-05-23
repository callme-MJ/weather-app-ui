import { createSlice } from "@reduxjs/toolkit"; 


export const citySlice = createSlice({
    name: 'city',
    initialState: {
      name: 'alappuzha'
    },
    reducers: {
      updateCity: (state, action) => {
          state.name = action.payload
      }
    }
  })
  
  export const { updateCity } = citySlice.actions
  export default citySlice.reducer