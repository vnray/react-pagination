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
            .addCase()
    }
})