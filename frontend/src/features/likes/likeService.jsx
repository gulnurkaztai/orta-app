import axios from 'axios'

const API_URL = '/api/posts/'

const likePost = async(postId)=>{
    console.log("service")
    console.log(postId)
    const response = await axios.put(API_URL+postId+'/likes')
    console.log("response")
    console.log(response.data)
    return response.data
}



const likeService = {
    likePost
}

export default likeService;