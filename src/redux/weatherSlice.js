import { createSlice } from "@reduxjs/toolkit"; 
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchWeather = createAsyncThunk('weather/fetchData', async (city)=>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b61522c47c162cbedbecc5b128a1ccf&units=metric`);
    return response.data;
})
const initialState ={
    pending :true,
    weatherData:[],
    error:''
}


const weatherSlice = createSlice({
    name: 'weatherData',
    initialState,
    extraReducers:{
        [fetchWeather.pending]:(state)=>{
            state.pending = true
            state.error=false
        },
        [fetchWeather.fulfilled]:(state,action)=>{
            state.pending = false
            state.weatherData = action.payload.weather
        },
        [fetchWeather.rejected]:(state)=>{
            state.pending = false
            state.error = true
        },
    }
})

export default weatherSlice.reducer