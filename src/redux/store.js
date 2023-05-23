import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import typeReducer from "./typeSlice";
import weatherReducer from "./weatherSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer} from "redux-persist"

const persistConfig = {
    key:"root",
    version: 1,
    storage
}

const reducer = combineReducers({
    format: typeReducer,
    city: cityReducer,
    weather: weatherReducer 
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:persistedReducer,
});
