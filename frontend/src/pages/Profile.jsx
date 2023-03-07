import { useSelector, useDispatch } from 'react-redux'
import { getMe } from '../features/auth/authSlice'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify'


const Profile = () => {
    const {user} = useSelector((state=>state.users))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id} = useParams()
//   console.log(id)
  useEffect(()=>{
    dispatch(getMe(id))
    .unwrap()
    .then((user)=>{
      toast.success(` ${user.name}`)
      navigate('/')
    })
    .catch(toast.error)
  })

      
  return (
    <div className='w-full px-6 py-6 mx-auto  text-gray-200 font-display'>
        <div className='relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words shadow-blur rounded-2xl bg-gray-700 mb-4 bg-opacity-50'>
            <div className='flex flex-wrap -mx-3'>
                <div className=' w-auto max-w-full px-3'>
                    <div className='text-size-base h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition animate-[spin_1s_ease-in-out_1] delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-green-500 duration-200'>
                        <img src={require('../components/assets/Mystique.jpg')} alt='avatar pic' className='w-20 h-20 shadow-soft-sm rounded-full '/>
                    </div>
                </div>
                <div className='w-auto max-w-full px-3 flex-row '>
                    <p>{user.name}</p>

                    <p>{user.bio} BIO</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile