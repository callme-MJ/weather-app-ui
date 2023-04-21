import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import typeReducer from "./typeSlice";

export default configureStore({
    reducer: {
        format: typeReducer,
        city: cityReducer,
    }
});
