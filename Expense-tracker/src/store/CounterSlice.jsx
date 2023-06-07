import { createSlice } from '@reduxjs/toolkit'

const initialState = {
count:0,

}

const CounterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment:(state)=>{
      state.count+=1

    },
    decremrent:(state)=>{
      state.count-=1

    },
    incrementby5:(state)=>{
      state.count+=5

    },
    decremrentby5:(state)=>{
      state.count-=5
    }
  }
});

export const CounterAction= CounterSlice.actions

export default CounterSlice