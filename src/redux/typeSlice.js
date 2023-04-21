import { createSlice } from "@reduxjs/toolkit"; 

export const typeSlice = createSlice({
    name: 'format',
    initialState: {
      name: 'metric'
    },
    reducers: {
        updateType: (state, action) => {
            state.name = action.payload
        }
    }
  })
  
  export const { updateType } = typeSlice.actions
  export default typeSlice.reducer