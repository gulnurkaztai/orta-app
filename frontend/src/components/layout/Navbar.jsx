import {Link, useNavigate} from 'react-router-dom'
import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'
import {FiMenu} from 'react-icons/fi'
import {useState} from 'react'

const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false)

  const onLogout = ()=>{
    dispatch (logout())
    navigate('/')
  }
  return (
    <>

<nav className=" bg-gray-900  text-gray-200" >
  <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto mx-w-full px-[5%] flex-wrap w-full">


      <div className='flex'>
        <Link to="/" className="flex items-center space-x-4 py-5">
          <div>
            <Logo className=""/>
          </div>
            <div className='hidden md:flex flex-col hover:text-white'>
              <span className="py-1 font-display">ORTA</span>
              <span className="py-1 font-display">Bılımge qūştar bol</span>
            </div>
        </Link>
      </div>
      {user ? (
        <>
          <div className='text-base flex justify-between items-center'>
                  <Link to='/create' className="md:py-5 px-3 block font-display hover:text-white">JANA JAZBA</Link>
          </div>
            <div className=''>
              <button className=' font-display' onClick={onLogout}>
                LOGOUT
              </button>
            </div>
         </>) : (
            <>
              <FiMenu className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)}/>
              <nav className={`${open? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
                <div className='text-base flex justify-between items-center'>
                  <Link to='/login' className="md:py-5 px-3 block font-display hover:text-white">KIRU</Link>
                  <Link to='/register' className="md:py-2 px-3 block font-display text-gray-900 bg-green-200 hover:bg-green-300 hover:text-black rounded-xl transition duration-300 uppercase">tırkelu</Link>
                </div>
              </nav>
            </>
            )}
  </div>
</nav>
</>
  )
}
export default Navbar