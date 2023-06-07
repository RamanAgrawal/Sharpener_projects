
import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice"

import CounterSlice from "./CounterSlice"




const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        counter:CounterSlice.reducer,
     
    }
})

export default store