import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const RootRedirect = () => {
    const { user } = useAuth();
    
    if(user?.role === 'admin') {
       return <Navigate to="/admin/dashboard" replace/>
    }
    if(user?.role === 'seller') {
       return <Navigate to='/seller/dashboard' replace/>
    }
    
    return <Navigate to='/login' replace/>
}

export default RootRedirect;