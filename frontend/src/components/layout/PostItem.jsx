import {Link} from 'react-router-dom'

const PostItem = ({post}) => {
  return (
    <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt></dt>
                  <dd>
                    <time>{new Date(post.createdAt).toLocaleString('en-US')}</time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-6'>
                    <div>
                      <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link to="#">{post.title}</Link>
                      </h2>
                      <div className='flex flex-wrap'>
                        #web {/* lists of tags */}
                    </div>
                    </div>

                    <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                      Description
                    </div>
                  </div>
                  <div className='text-base font-medium leading-6'>
                    <Link to={`/posts/${post._id}`} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>Read more -></Link>
                  </div>
                </div>
              </div>
            </article>
            </li>
  )
}
export default PostItem

