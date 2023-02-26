import axios from 'axios'

const API_URL = '/api/posts/'

const likePost = async(postId)=>{
    console.log("service")
    console.log(postId)
    const response = await axios.patch(API_URL+postId)
    console.log("response")
    console.log(response)
    return response.data
}



const likeService = {
    likePost
}

export default likeService;