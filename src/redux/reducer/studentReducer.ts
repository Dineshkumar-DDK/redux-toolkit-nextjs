import {  createSlice,PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../actions/studentsAction";


export interface Stu {
    Name:string,
    Age:number,
    City:string
}

export interface responseType {
    status:number | null,
    message:string | null,
    data:Stu[],
    loading:boolean,
    error:string|null
}

let initialState:responseType={
    status:null,
    message:null,
    data:[],
    loading:false,
    error:null
}

const studentReducer = createSlice({
    name:'student',
    initialState,
    reducers:{
        add(state,action:PayloadAction<Stu>){
            state.data?.push(action.payload)
        }
       
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData?.fulfilled,(state,action)=>{
            state.data?.push(...action.payload)
            state.loading=false
            console.log("Okkk @@@",action)
        }).addCase(fetchData?.rejected,(state,action)=>{
           state.data=[]
           state.error=action.payload as string
        }).addCase(fetchData?.pending,(state,action)=>{
           state.error = null;
           state.loading=true;
        })
    }

})

export const {add} = studentReducer.actions
export default studentReducer.reducer