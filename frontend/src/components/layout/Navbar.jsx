import {Link, useNavigate} from 'react-router-dom'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'
const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = ()=>{
    dispatch (logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="/" className="flex items-center">
      <div className='mr-5'>
      <Logo className="h-6 sm:h-9"/>
      </div>
      <div className="flex flex-col">
        <span className=" text-xl font-semibold whitespace-nowrap dark:text-white font-display">ORTA</span>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-display">Bılımge qūştar bol</span>
        </div>
    </Link>
    {user ? (
          <li>
            <button className='btn text-white font-display' onClick={onLogout}>
               Logout
            </button>
          </li>
        ) : (
    <div className="w-full md:w-auto flex flex-row justify-between " id="navbar-default">
        <Link to='/login' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-display mr-10">LOG IN</Link>
        <Link to='/register' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-display">SIGN UP</Link>
    </div>)}

  </div>
</nav>
  )
}
export default Navbar