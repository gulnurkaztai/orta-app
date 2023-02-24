import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentService from '../posts/postService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    comments: null,
    comment: null,
}

// Create new comment
export const createComment = createAsyncThunk('/posts/:postId/new-commment', async(commentData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await commentService.createComment(commentData, token)
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
                state.comment = action.payload
            })
    }
})

export default commentSlice.reducer
