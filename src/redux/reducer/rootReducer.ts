import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "./studentReducer";



const rootReducer = combineReducers({
    student:studentReducer
})

export default rootReducer