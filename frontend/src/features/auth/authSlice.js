import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService'
import {extractErrorMessage} from '../../utils'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    users: null,
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
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer