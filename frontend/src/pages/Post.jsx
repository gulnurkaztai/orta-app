import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../features/posts/postSlice'
import BackButton from '../components/backbutton/BackButton'
import Spinner from '../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const Post = () => {

  const {posts} = useSelector((state)=>state.posts)
console.log(posts)

const dispatch = useDispatch()
const {postId} = useParams()
console.log(postId)
useEffect(()=>{
    dispatch(getPost(postId)).unwrap().catch(toast.error)
},[postId,dispatch])

if(!posts){
  return <Spinner/>
}

  return (
    <div className=''>
    <header className=''>

      <h3>
        Hello
      </h3>
      <p></p>
    </header>


  </div>
  )
}
export default Post