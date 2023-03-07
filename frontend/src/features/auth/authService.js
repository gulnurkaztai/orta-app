import axios from 'axios'

const API_URL = '/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const updateProfile = async (userData) => {
  const response = await axios.put(API_URL + "me/update", userData)

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data))
  // }
  return response.data
}

// Get all users
const getUsers = async () =>{
  const response = await axios.get(API_URL)
  return response.data
}

const getMe = async (id) =>{
  const response = await axios.get(API_URL+id)
  return response.data
}

const logout = () => localStorage.removeItem('user')
const authService={
    register,
    logout,
    login,
    getUsers,
    getMe,
    updateProfile
}

export default authService