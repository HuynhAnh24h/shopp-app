import {createContext, use, useState} from "react"

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user,setUser] = useState([])
    const login = (userName, role)=>{
        setUser([userName,role])
    }
    const logout = ()=>{
        setUser([])
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}