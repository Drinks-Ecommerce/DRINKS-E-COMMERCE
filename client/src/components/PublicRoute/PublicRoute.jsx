import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../AuthContext/AuthContext";

export default function PublicRoute(){
    const {isAuthenticated} = useAuthContext();
    
    if(isAuthenticated){
        return <Navigate to='/private'/>
    }
    return (
        <Outlet />
    )
}