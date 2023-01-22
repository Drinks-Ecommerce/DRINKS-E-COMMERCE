import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const user = JSON.parse(window.localStorage.getItem("cookie"));
    console.log(user, "ISER")
    const getRole = function(){
        if( user && user.token ){
            return user.user.role;
        }else{
            return ;
        }
    };
    let auxRole = getRole();

    function aux() {
        if(state === "LOGIN_USER"){
            return true;
        } else{
            return false;
        }
    }
    let auth = aux()
    return auth ? children : <Navigate to="/login"/>;
}
