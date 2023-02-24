import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentService from '../posts/postService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    comments: null,

}

// Create new comment
export const createComment = createAsyncThunk('comments/new-commment', async({commentText, postId}, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await commentService.createComment(commentText, postId, token)
    } catch(error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

// Get comments
export const getComments = createAsyncThunk('comments/getAll', async(postId, thunkAPI) =>{
    try{
        return await commentService.getComments(postId)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})



export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    extraReducers: (builder) =>{
        builder
            .addCase(createComment.fulfilled, (state,action)=>{
                state.comments.push(action.payload)
            })
            .addCase(getComments.fulfilled, (state, action)=>{
                state.comments = action.payload
            })
    }
})

export default commentSlice.reducer
