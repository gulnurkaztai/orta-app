import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentService from '../posts/postService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    comments: null,
    comment: null
}

// Create new comment
export const createComment = createAsyncThunk('comments/new', async({commentText, postId}, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().users.user.token
        return await commentService.createComment(commentText, postId, token)
    } catch(error){
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
    }
})

export default commentSlice.reducer
