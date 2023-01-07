import {  createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState={
    loading:false,
    users:[],
    err:''
}


export const fetchUsers=createAsyncThunk('user/fetchUsers', ()=>{
    return  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data ) 
})

const users=createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.err=''
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.err=action.err.message
        })
    }

})
export default users.reducer