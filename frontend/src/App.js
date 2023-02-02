import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/layout/Navbar'
import Register from './pages/Register'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-autopx-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

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
