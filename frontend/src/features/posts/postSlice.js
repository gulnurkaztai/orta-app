import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'
import {extractErrorMessage} from '../../utils'

const initialState = {
    posts: null,
    post: null,
}

// Create new post
export const createPost = createAsyncThunk('posts/create', async(postData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await postService.createPost(postData, token)
    } catch(error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

// Get user posts

export const getPosts = createAsyncThunk('/posts/getAllMyPosts', async(_, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await postService.getPosts(token)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

// Get user post
export const getPost = createAsyncThunk('/posts/get', async(postId, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await postService.getPosts(postId, token)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
           state.post = null
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload

        })
    },
})

export default postSlice.reducer