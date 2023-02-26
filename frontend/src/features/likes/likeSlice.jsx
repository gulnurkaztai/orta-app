import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import likeService from '../likes/likeService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    likeCount: 0
}

export const likePost = createAsyncThunk('/posts/get/likes', async(postId, thunkAPI) =>{
    try{
        console.log("thunk")
        console.log(postId)
        return await likeService.likePost(postId)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})


export const likeSlice = createSlice({
    name: 'like',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(likePost.fulfilled, (state)=>{
            state.likeCount ++;
        })
        .addCase(likePost.rejected, (state)=>{
            console.log(state)
        })
    }

})

export default likeSlice.reducer