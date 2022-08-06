import { AuthContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';





const LoginRoute = () => {
    const { auth } = useContext(AuthContext)
    if (auth.username) {
        return <Navigate to='/profile' />
    }

    return <Outlet />
}



export default LoginRoute