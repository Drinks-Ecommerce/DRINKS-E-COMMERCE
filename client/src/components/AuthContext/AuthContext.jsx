import { createContext, useCallback, useContext } from "react";
import { useState } from "react";
import { useMemo } from "react";


export const AuthContext = createContext();

const AUTH_APP = 'AUTH_APP'

export  function AuthContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(
        () =>  !!window.localStorage.getItem(AUTH_APP)
    );


    const login = useCallback(function (){
        window.localStorage.setItem(AUTH_APP)
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(function (){
        window.localStorage.removeItem(AUTH_APP)
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(
    () => ({
            isAuthenticated,
            login,
            logout
    })
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext(){
    return useContext(AuthContext);
}