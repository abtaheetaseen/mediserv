import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    isLoading: null,
    error: null,
    searchText: ''
}
 
export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async() => {
        const response = await axios.get('https://taseenapi-p5hts62j7-abtahee-taseens-projects.vercel.app/service')
        return response?.data 
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(productsFetch.pending, (state)=>{
            state.isLoading = true;
        })

        builder.addCase(productsFetch.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.items = action.payload;
            state.error = null;
        })

        builder.addCase(productsFetch.rejected, (state, action)=>{
            state.isLoading = false;
            state.items = [];
            state.error = action.error.message;
        })
    }
})


export default productsSlice.reducer