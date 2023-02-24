import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../features/posts/postSlice'
import BackButton from '../components/backbutton/BackButton'
import Spinner from '../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const Post = () => {

  const {post} = useSelector((state)=>state.posts)
console.log(post)

const dispatch = useDispatch()
const {postId} = useParams()
console.log(postId)
useEffect(()=>{
    dispatch(getPost(postId)).unwrap().catch(toast.error)
},[postId,dispatch])

if(!post){
  return <Spinner/>
}

  return (
    <div className=''>
    <header className=''>

      <h3>
        {post.title}
      </h3>
      <p></p>
    </header>


  </div>
  )
}
export default Post