import {FiMail} from 'react-icons/fi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../../features/auth/authSlice'


const UserIcon = () => {
    const {user} = useSelector((state)=>state.users)
    const [userMenu, setUserMenu] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = ()=>{
      dispatch (logout())
      navigate('/')
    }

  return (
    <div className='flex flex-row w-32 items-center relative'>
        <FiMail className='basis-1/3 w-6 h-6'/>
        <MdOutlineNotificationsNone className='basis-1/3 w-6 h-6'/>

        <img 
          className="w-6 h-6 rounded-full basis-1/3"
          src={user.avatarPic} 
          alt="avatar" 
          onClick={(e)=>setUserMenu(!userMenu)}
          data-dropdown-toggle="dropdownId"
          />


    <div id="dropdown" className={`${userMenu? "block" : "hidden"} absolute right-0 top-10 bg-white  rounded-lg shadow w-32 dark:bg-gray-700`} >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 font-display">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
              <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-display' onClick={onLogout}>
                Logout
              </button>
            </li>
        </ul>
    </div>
    </div>
  )
}
export default UserIcon