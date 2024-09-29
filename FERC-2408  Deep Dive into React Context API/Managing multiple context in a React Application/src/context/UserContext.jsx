import { createContext, useState } from "react";


export const userContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState('LogOut');

    const ToggleUser = () => {
        setUser((prev) => prev === 'LogOut' ? 'LogIn' : 'LogOut')
    }

    return (
         <userContext.Provider value={{user, ToggleUser}}>
            {children}
         </userContext.Provider>
    )
}