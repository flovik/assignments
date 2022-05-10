import { Navigate, Outlet, useLocation } from 'react-router-dom'
import authService from '../services/auth-service'

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation();
    const currentUser = authService.getCurrentUser();
    if(!currentUser){
        //not logged in
        return <Navigate to="/login" replace state={{ path: location.pathname }} />
    }

    //check if route is restricted by role
    if(authService.getRole().find((role) => allowedRole?.includes(role))){
        //unauthorized access
        return <Outlet />
    }
    
    return <Navigate to="/unauthorized" replace state={{ path: location.pathname }} />
  
}

export default RequireAuth