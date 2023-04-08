import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Auth = React.createContext({
    isLoggedIn: false,
    token: null,
    login: (token) => { },
    logout: () => { }
});



const AuthProvider = ({ children }) => {
    const navigate=useNavigate()
    const initialToken=localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token',token)

    }
    const userIsLoggedIn = !!token
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        navigate('/')
    }

    return <Auth.Provider value={{
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        token:token
    }}>{children}</Auth.Provider>
}


export default AuthProvider
export const AuthContext = () => {
    return useContext(Auth)
}