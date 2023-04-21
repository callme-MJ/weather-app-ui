import { createSlice } from "@reduxjs/toolkit"; 

export const citySlice = createSlice({
    name: 'city',
    initialState: {
      name: 'alappuzha'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload
        }
    }
  })
  
  export const { update } = citySlice.actions
  export default citySlice.reducer