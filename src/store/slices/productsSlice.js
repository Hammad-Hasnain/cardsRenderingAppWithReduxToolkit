import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
// isRejectedWithValue
import axios from "axios";

const initialState = {
    isLoading: false,
    productsData: [],
    isError: false,
}


export const fetchData = createAsyncThunk('Prodducts/fetch', async () => {
    try {
        const data = await axios.get('https://fakestoreapi.com/products')
        // console.log('data=====>', data.data);
        return data.data

    } catch (error) {
        // console.log('error ====> ', error);
        return isRejectedWithValue(error.code)
    }
})



const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchData.pending, (state, action) => {
            console.log('pending')
            state.isLoading = true;
        })

        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log('fulfilled')
            state.isLoading = false
            state.productsData = action.payload
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            console.log('rejected')
            state.isError = true;
            console.log('action.payload==>', action.payload)

        })
    }
})




const { reducer } = productsSlice

export default reducer 