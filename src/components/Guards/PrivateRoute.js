import { AuthContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';





const PrivateRoute = () => {
    const { auth } = useContext(AuthContext)
    if (!auth.username) {
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}



export default PrivateRoute