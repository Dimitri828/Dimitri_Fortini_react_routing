import { createContext } from "react";
import { useState } from "react";
export const Context= createContext();

export function UserContext({children}){
    const [user, setUser]=useState();
    const register= (newUser)=>setUser(newUser);
    const logout=()=>{setUser(null)};

    return (
        <Context.Provider value={{user,register,logout}}>
        {children} 
        </Context.Provider>
    
    )

}
