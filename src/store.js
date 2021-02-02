import userReducer from './_reducers/userSlice'
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        user: userReducer
    }
});