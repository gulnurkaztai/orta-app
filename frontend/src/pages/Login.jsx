import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'
import Spinner from '../components/spinner/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'



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
    <div className='text-center justify-between'>
      <section className='heading'>
        <h1 className='font-display'>
           Login
        </h1>
        <p className='font-display'>Please login in</p>
      </section>

      <div className='form '>
        <form onSubmit={onSubmit}>
          <div className='form-group font-display '>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group font-display'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block font-display'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login