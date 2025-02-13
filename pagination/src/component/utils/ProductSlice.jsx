import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {axios} from "axios"
const initialState = {
    products:[],
    page:1,
    hasMore:true,
    loading:false,
}

const fetchProducts = createAsyncThunk(async(page, {getstate})=>{
const response = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
return response.data;
})

const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        resetProducts:{
            products:[],
            loading:false,
            hasMore:true,
            page:1,
        }
    },
    extraReducer:(builder)=>{
            builder
            .addCase(fetchProducts.pending, (state)=>{
                state.loading=true
            })
            .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.loading = false;
                state.products = [...state.products, ...action.payload.products];
                state.hasMore = action.payload.products.length>0;
                state.page +=1;
            })

            .addCase(fetchProducts.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export const {resetProducts} = ProductSlice.actions;
export default ProductSlice.reducer;