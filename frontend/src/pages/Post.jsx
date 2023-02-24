import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../features/posts/postSlice'
import BackButton from '../components/backbutton/BackButton'
import {createComment, getComments} from '../features/comments/commentSlice'
import CommentItem from '../components/layout/CommentItem'
import Spinner from '../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'

const Post = () => {
const [commentText, setCommentText] = useState('')
const {post} = useSelector((state)=>state.posts)
const {comments} = useSelector((state)=> state.comments)
console.log(comments)
console.log(post)

const dispatch = useDispatch()
const {postId} = useParams()
console.log(postId)
useEffect(()=>{
    dispatch(getPost(postId)).unwrap().catch(toast.error)
    dispatch(getComments(postId)).unwrap().catch(toast.error)
},[postId,dispatch])

const onCommentSubmit = (e) =>{
  e.preventDefault()
  dispatch(createComment({commentText, postId}))
}

if(!post){
  return <Spinner/>
}

  return (
    <div className=''>
    <header className=''>

      <h3>
        {post.title}
      </h3>
      <p>{post.text}</p>
    </header>
    <div>
      <form onSubmit={onCommentSubmit}>
        <textarea 
        name="comment-text" 
        rows="10"
        value={commentText}
        onChange={(e)=>setCommentText(e.target.value)}
        ></textarea>
<button>Comment</button>
      </form>
      <div>

      </div>

    </div>


  </div>
  )
}
export default Post