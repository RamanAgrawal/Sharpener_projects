import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoggedIn:true
}
const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       
    }
})
export const AuthAction=AuthSlice.actions
export default AuthSlice