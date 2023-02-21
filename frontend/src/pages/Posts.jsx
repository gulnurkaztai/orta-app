import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts} from '../features/posts/postSlice'
import Spinner from '../components/spinner/Spinner'
import BackButton from '../components/backbutton/BackButton'
import PostItem from '../components/layout/PostItem'

const Posts = () => {
   const {posts} = useSelector((state)=>state.posts)
   const dispatch = useDispatch()

   useEffect(() => {
        dispatch(getPosts())
   }, [dispatch])

   if(!posts){
    return <Spinner/>
   }

  return (
    <div>
    <BackButton/>
    <h1>POSTS</h1>
    {posts.map((post)=>(
      <PostItem key={post._id} post={post}/>
    ))}
    </div>
  )
}
export default Posts