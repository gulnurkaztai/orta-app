import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/layout/Navbar'
import Register from './pages/Register'
import Footer from './components/layout/Footer'
import Write from './pages/Write'
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Posts from './pages/Posts';

function App() {
  return (
    <>
    <Router>
      <div className=''>
      <Navbar/>
      <main className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-200'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/write' element={<PrivateRoute/>}>
            <Route path='/write' element ={<Write/>}/>
          </Route>
          <Route path='/posts' element={<PrivateRoute/>}>
            <Route path='/posts' element ={<Posts/>}/>
          </Route>
        </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
      <ToastContainer/>
    </>
  )
}

export default App;
