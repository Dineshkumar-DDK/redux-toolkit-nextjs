import {  createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface Stu {
    Name:string,
    Age:number,
    City:string
}

let initialState:Stu[]=[]

const studentReducer = createSlice({
    name:'student',
    initialState,
    reducers:{
        add(state,action:PayloadAction<Stu>){
            state.push(action.payload)
        }
    }

})

export const {add} = studentReducer.actions
export default studentReducer.reducer