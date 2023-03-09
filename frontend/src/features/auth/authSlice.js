import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService'
import {extractErrorMessage} from '../../utils'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    users: [],
    user: user? user:null,
    isLoading: false,
}

export const register = createAsyncThunk('auth/register', async(user, thunkAPI)=>{
    try {
        return await authService.register(user)

    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const login = createAsyncThunk('auth/login', async(user, thunkAPI)=>{
    try {
        return await authService.login(user)

    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const logout = createAction('auth/logout', ()=>{
    authService.logout()
    return{}
})

export const getUsers = createAsyncThunk('/users/getAll', async(_, thunkAPI) =>{
    try {
        return await authService.getUsers()
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const getMe = createAsyncThunk('me', async(id, thunkAPI) =>{
    try {
        return await authService.getMe(id)

    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})


export const updateProfile = createAsyncThunk('/update', async(updatedUser, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().users.user.token
        console.log("slice")
    console.log(updatedUser)
        return await authService.updateProfile(updatedUser, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state)=>{
            state.user = null
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading =false
        })

        .addCase(register.rejected, (state)=>{
            state.isLoading=false
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading=false
        })

        .addCase(login.rejected, (state, action)=>{
            state.isLoading=false
        })
        .addCase(getUsers.fulfilled, (state, action) =>{
            state.users = action.payload
        })
        .addCase(getMe.fulfilled, (state, action) =>{
            state.user = action.payload
        })
        .addCase(updateProfile.fulfilled, (state, action)=>{
            const updatedUser = action.payload;
            state = {
              ...state,
              posts: state.users.map((user) => {
                console.log(user._id);
                return user._id === updatedUser._id ? { ...user, ...updatedUser } : user;
              }),
            };
        })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer