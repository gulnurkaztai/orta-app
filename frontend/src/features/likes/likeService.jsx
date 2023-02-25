import axios from 'axios'

const API_URL = '/api/posts/'

const likePost = async(postId)=>{
    const response = await axios.patch(API_URL+postId)
    return response.data
}



const likeService = {
    likePost
}

export default likeService;