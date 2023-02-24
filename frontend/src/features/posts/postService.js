import axios from 'axios'

const API_URL = '/api/posts/'

// Create new post
const createPost = async (postData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, postData, config)
    return response.data
}

// Get posts
const getPosts = async () =>{

    const response = await axios.get(API_URL)
    return response.data
}

// Get post
const getPost = async (postId) =>{
    const response = await axios.get(API_URL + postId)
    return response.data
}

const postService = {
    createPost,
    getPosts,
    getPost
}

export default postService
