import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, reset } from '../features/posts/postSlice'
import Spinner from '../components/spinner/Spinner'
import BackButton from '../components/backbutton/BackButton'

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
    </div>
  )
}
export default Posts