import {Link} from 'react-router-dom'

const PostItem = ({post}) => {
  return (
    <div>
        <div>
            {new Date(post.createdAt).toLocaleString('en-US')}
        </div>
        <div>
            {post.title}
        </div>
        <Link to={`/posts/${post._id}`}>
        View
        </Link>

    </div>
  )
}
export default PostItem

