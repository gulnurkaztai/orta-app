import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../features/posts/postSlice'
import {likePost} from '../features/likes/likeSlice'
import BackButton from '../components/backbutton/BackButton'
import {createComment, getComments} from '../features/comments/commentSlice'
import CommentItem from '../components/layout/CommentItem'
import Spinner from '../components/spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'

const Post = () => {
const [commentText, setCommentText] = useState('')
const {post} = useSelector((state)=>state.posts)
const {user} = useSelector((state)=>state.users)
const {likes} = useSelector((state)=>state.likes)

const dispatch = useDispatch()
const {postId} = useParams()
useEffect(()=>{
    dispatch(getPost(postId)).unwrap().catch(toast.error)
},[postId,dispatch])

const onCommentSubmit = (e) =>{
  e.preventDefault()
  dispatch(createComment({commentText, postId}))
  .unwrap()
  .then(() => {
    setCommentText('')
  })
  .catch(toast.error)
}

if(!post){
  return <Spinner/>
}

  return (
    <>

<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl font font-display">
      <article className="mx-auto w-full max-w-3xl border format format-sm sm:format-base lg:format-lg format-blue dark:format-invert bg-gray-800 rounded-3xl p-10">
          <header className="mb-4 lg:mb-6 not-format px-10 py-5">
              <div className="flex  -ml-10 mb-8 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white ">
                      <img className="mr-4 w-16 h-16 rounded-full" src='https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg' alt="avatar photo"/>
                      <div className=''>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{post.user_name}</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Avtordin BIO</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"><time>{new Date(post.createdAt).toDateString()}</time></p>
                      </div>
                  </div>
              </div>
              <div className=' mb-4 mt-5'>
                    <h2 className="text-center text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl md:text-2xl dark:text-white">{post.title}</h2>
              </div>
              
          </header>
          <div className='prose max-w-none text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                    <p classNameName='px-10 py-5 '>{post.text}</p>
          </div>

            <div className='w-full mt-5 mb-5 flex flex-row-reverse gap-x-3.5 '>
                <button onClick={()=>dispatch(likePost({user, postId}))} className='mt-0.5 flex'><BsBookmark className='w-6 h-6 top-0'/></button>
                <button onClick={()=>dispatch(likePost({user, postId}))} className=''><AiOutlineMessage className='w-6 h-6'/><div>{post.comments.length}</div></button> 
                <button onClick={()=>dispatch(likePost({user, postId}))} className=''><FaRegHeart className='w-6 h-6'/><div>{post.likes.length}</div></button>

                
            </div>

          <section className="not-format">
              <div className="flex justify-between items-center mb-6 ">
              </div>
              <form className="mb-6" onSubmit={onCommentSubmit}>
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <label for="comment" className="sr-only">Your comment</label>
                      <textarea id="comment" rows="6" value={commentText}
        onChange={(e)=>setCommentText(e.target.value)}
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..." required></textarea>
                  </div>
                  <button type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                      Post comment
                  </button>
              </form>
              <div>
                {post.comments.map((comment)=><CommentItem key={comment._id} comment={comment}/>)}
              </div>

 
          </section>
      </article>
  </div>
</main>





  </>
  )
}
export default Post