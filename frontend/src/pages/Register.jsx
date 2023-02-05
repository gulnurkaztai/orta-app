import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/spinner/Spinner';
import { Link } from 'react-router-dom'
import {FaGithub, FaFacebook, FaGoogle, FaRegEnvelope, FaRegUserCircle} from 'react-icons/fa'
import {BiLock} from 'react-icons/bi'
 
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
 
  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );
 
  const { name, email, password, password2 } = formData;
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
    }));
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
 
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
 
      dispatch(register(userData));
    }
  }

  if(isLoading){
    return <Spinner/>
  }
 
  return (
    <div className='flex flex-col items-center justify-center w-full flex-1 text-center text-gray-800'>
      <div className='bg-white rounded-2xl shadow-2xl shadow-green-300 flex flex-row w-3/5 max-w-4xl'>

      <div className='w-2/5 bg-green-200 rounded-tl-2xl rounded-bl-2xl py-36 px-12 font-display '>
          <h2 className='text-xl font-semibold mb-16 uppercase text-gray-800' >Qaita keluıñızben!</h2>
          <p className='mb-10 text-gray-800'>Bız sızdı sağyndyq 🙃</p>
          <Link to='/login' className="inline block bg-white py-3 px-7 font-display text-gray-800 hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">KIRU</Link>

        </div>

        <div className='w-3/5 p-5'>
          <div className='py-5'>
            <h1 className='font-display font-semibold text-2xl uppercase'>
            tırkelu
            </h1>
          </div>
          <p className='font-display  mb-3'>Avtorizasiadan ötıñız</p>

        {/* Sign UP Form */}
        <div className='flex flex-col items-center'>
 
        <form onSubmit={onSubmit}>

        <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl  mb-1'>
            <FaRegUserCircle className='text-gray-400 m-2'/>
            <input
              type="text"
              className="bg-gray-100 outline-none text-sm flex-1"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-1'>
          <FaRegEnvelope className='text-gray-400 m-2'/>
            <input
              type="email"
              className="bg-gray-100 outline-none text-sm flex-1"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-1'>
          <BiLock className='text-gray-400 m-2'/>
            <input
              type="password"
              className="bg-gray-100 outline-none text-sm flex-1"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Create a password"
              required
            />
          </div>
          <div className='font-display bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-3'>
          <BiLock className='text-gray-400 m-2'/>
            <input
              type="password"
              className="bg-gray-100 outline-none text-sm flex-1"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button className=" bg-green-200 py-2 px-9 font-display text-gray-900  hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">tırkelu</button>

          </form>
    </div>

          {/* log in with social media */}
          <div className='border-2 w-60 mb-2 inline-block my-4'></div>
      <p className='mb-2 font-display text-gray-400'>NEMESE </p>
        <p className='font-display text-gray-400 mb-5'>äleumettık jelıñızben kırıñız</p>
        <div className='flex justify-center my-2'>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaFacebook/></Link>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGithub/></Link>
          <Link to='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'><FaGoogle/></Link>
        </div>
    </div>
    </div>
    </div>

  );
}
 
export default Register;