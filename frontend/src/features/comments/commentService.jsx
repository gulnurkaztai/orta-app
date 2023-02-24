import axios from 'axios'

const API_URL = '/api/posts/'

const createComment = async(commentText, postId, token) => {
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+postId+'/comments', {text: commentText}, config)
    return response.data
}

// Get comments

const getComments = async(postId)=>{
    const response = await axios.get(API_URL+postId+'/comments')
    return response.data
}



const commentService = {
    createComment,
    getComments,
}

export default commentService