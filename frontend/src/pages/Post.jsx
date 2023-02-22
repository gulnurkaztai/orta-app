import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../features/posts/postSlice'
import BackButton from '../components/backbutton/BackButton'
import Spinner from '../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const Post = () => {

const {post} = useSelector((state)=>state.posts)
const dispatch = useDispatch()
const {postId} = useParams()

useEffect(()=>{
    dispatch(getPost(postId)).unwrap().catch(toast.error)
},[postId,dispatch])



  return (
    <div className=''>
    <header className=''>
      <BackButton />
      <h3>
        Date Created:
      </h3>
 
    </header>


  </div>
  )
}
export default Post