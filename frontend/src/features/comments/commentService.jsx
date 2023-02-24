import axios from 'axios'

const API_URL = '/api/posts/'

const createComment = async(commentData, token) => {
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, commentData, config)
    return response.data
}

const commentService = {
    createComment,
}

export default postService