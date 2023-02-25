import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'
import commentReducer from '../features/comments/commentSlice'
import likeReducer from '../features/likes/likeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
    likes: likeReducer
  },
});
