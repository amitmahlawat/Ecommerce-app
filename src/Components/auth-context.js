import React, { useState } from "react";



const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}


});

export const AuthContextProvider=(props)=>{
    const initialtoken=localStorage.getItem('token')
const[token,SetToken]=useState(initialtoken)
const userLoggedIn=!!token


const loginHandler=(token)=>{
    SetToken(token)
    localStorage.setItem('token',token)
}
const logoutHandler=()=>{
    SetToken(null)
    localStorage.clear()
    console.log('clicking')
}
const contextValue={
    token:token,
    isLoggedIn:userLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

    return(
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;