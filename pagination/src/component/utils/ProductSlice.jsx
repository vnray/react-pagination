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
        incrimentPage:(state, action)=>{
            state.page +=1;
        }
    },
    extraReducer:(builder)=>{
            builder
            .addCase(fetchProducts.pending, (state)=>{
                state.loading=true
            })
            .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.loading = false;
                state.products = [...state.products, ...action.payload];
                state.hasMore = action.payload.length>0;
                
            })

            .addCase(fetchProducts.rejected, (state, action)=>{
                state.loading = false;
              
            })
    }
})

export const {incrimentPage} = ProductSlice.actions;
export default ProductSlice.reducer;