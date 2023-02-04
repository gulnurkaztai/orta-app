import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'
import Spinner from '../components/spinner/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {FaGithub, FaFacebook, FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {BiLock} from 'react-icons/bi'



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isSuccess, isError, message} = useSelector((state)=>state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message); // Message set in Redux
    }
    // Redirect when logged in
    if (isSuccess && user) {
      navigate('/');
      dispatch(reset);
    }
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  
  }

  if(isLoading) {
    return <Spinner/>
  }
  return (
    <div className='flex flex-col items-center justify-center w-full flex-1 text-center text-gray-800'>
      <div className='bg-white rounded-2xl shadow-2xl shadow-green-300 flex flex-row w-3/5 max-w-4xl'>

        <div className='w-3/5 p-5'>
          <div className='py-5'>
            <h1 className='font-display font-semibold text-2xl'>
              KIRU
            </h1>
          </div>
          <p className='font-display  mb-3'>Avtorizasiadan ötıñız</p>

        {/* Sign in Form */}
        <div className='flex flex-col items-center'>

          <form onSubmit={onSubmit}>

            <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl  mb-3'>
              <FaRegEnvelope className='text-gray-400 m-2'/>
              <input
                type='email'
                className='bg-gray-100 outline-none text-sm flex-1'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl'>
            <BiLock className='text-gray-400 m-2'/>
              <input
                type='password'
                className='bg-gray-100 outline-none text-sm flex-1'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter password'
                required
              />
            </div>
            <div className='flex justify-between w-64 my-5'>
              <label className='flex items-center text-xs'><input type="checkbox" name='remeber' className='mr-1'/>Esıñe saqta</label>
              <a href="#" className='text-xs'>Qūpiasözdı ūmyttyñyz ba?</a>
            </div>

              <button className="border-2 border-green-300 md:py-2 px-9 font-display text-gray-900 hover:bg-green-300 hover:text-white rounded-xl transition duration-300">KIRU</button>


          </form>

        </div>

      {/* log in with social media */}
      <div className='border-2 w-60 mb-2 inline-block my-6'></div>
      <p className='mb-4 font-display text-gray-400'>NEMESE </p>
        <p className='font-display text-gray-400 mb-5'>äleumettık jelıñızben kırıñız</p>
        <div className='flex justify-center my-2'>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaFacebook/></Link>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGithub/></Link>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGoogle/></Link>
        </div>


        </div>

        <div className='w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-36 px-12 font-display'>
          <h2 className='text-xl font-semibold mb-2 uppercase text-white' >Salem, Dos!</h2>
          <p className='mb-10 text-white'>Bızben saiahatty bastau üşın tırkelıñız!</p>
          <Link to='/register' className="inline block border-2 border-white md:py-2 px-9 font-display text-white hover:bg-white hover:text-black rounded-xl transition duration-300 uppercase">tırkelu</Link>

        </div>

      </div>
    </div>
  )
}
export default Login