import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
    posts: [],
    post: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
// Create new post
export const createPost = createAsyncThunk('posts/create', async(postData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await postService.createPost(postData, token)
    } catch(error){
        const message = 
        (error.response && error.response.data &&
        error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user post

export const getPosts = createAsyncThunk('/posts/getAllMyPosts', async(_, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await postService.getPosts(token)
    } catch (error){
        const message = 
        (error.message && error.response.data &&
            error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createPost.pending, (state) => {
          state.isLoading = true
        //   state.post = null
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true

        })
        .addCase(createPost.rejected, (state, action) => {
             state.isLoading = false
            state.isSuccess = true
          state.message = action.payload
        })
        .addCase(getPosts.pending, (state) => {
          state.isLoading = true
        //   state.post = null
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload

        })
        .addCase(getPosts.rejected, (state, action) => {
             state.isLoading = false
            state.isSuccess = true
          state.message = action.payload
        })
    },
})

export const {reset} = postSlice.actions
export default postSlice.reducer