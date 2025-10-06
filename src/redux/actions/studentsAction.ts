import { createAsyncThunk } from "@reduxjs/toolkit";
import { Stu,responseType } from "../reducer/studentReducer";






export const fetchProductData = createAsyncThunk('fetching data using endpoint', async (_, thunkApi) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(response, "from async thunk...")
        if (!response?.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response?.json();
        return data
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
        return thunkApi.rejectWithValue(errorMessage)
    }
})

export const fetchData = createAsyncThunk('fetching data for students using json server', async (_, thunkApi) => {
    const sampleApiSetup:Promise<Stu[]> = new Promise((resolve, rejected) => {
        setTimeout(() => resolve(
           [{
                Name: "Rahul",
                Age: 23,
                City: "Pune"
            },
            {
                Name: "Ravi",
                Age: 23,
                City: "Pune"
            }, {
                Name: "Rohit",
                Age: 23,
                City: "Pune"
            }
            ]
        ), 4000)
    })
    
    try {
        const response: Stu[] = await sampleApiSetup;
        return response
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
        return thunkApi.rejectWithValue(errorMessage)
    }
})