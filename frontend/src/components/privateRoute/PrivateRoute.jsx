import {Navigate, Outlet} from 'react-router-dom'
import useAuthStatus from '../../hooks/useAuthStatus'
import Spinner from '../spinner/Spinner'

const PrivateRoute = () => {
    const {loggedIn, checkLoading} = useAuthStatus()

    if(checkLoading){
        return <Spinner/>
    }
    return loggedIn? <Outlet/>:<Navigate to='/login'/>
}
export default PrivateRoute