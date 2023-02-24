import axios from 'axios'

const API_URL = '/api/posts/'

// Get comments

const getComments = async(postId)=>{
    const response = await axios.get(API_URL+postId+'/comments')
    return response.data
}

const createComment = async(commentText, postId, token) => {
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+postId+'/comments', commentText, config)
    return response.data
}


const commentService = {
    createComment,
    getComments,
}

export default commentService;