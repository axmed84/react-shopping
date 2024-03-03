import { createContext, useState, useContext, useEffect } from "react"

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const logOut = () =>{
        localStorage.removeItem('user');
        localStorage.removeItem('expirationTime');
        setUser(null)
    }

    useEffect(() => {

        const storedUSer = localStorage.getItem('user');
        const expirationTime = localStorage.getItem('expirationTime')

        if(storedUSer && expirationTime) {
            const currentTime = new Date().getTime();

            if(currentTime < parseInt(expirationTime)) {
                setUser(JSON.parse(storedUSer))
            }else{
                logOut()
            }
        }
    }, [])

    const login = (userData, expiresIn) => {

        const expirationTime = new Date().getTime() + expiresIn * 1000;

        localStorage.setItem('expirationTime', expirationTime.toString());
        localStorage.setItem('user', JSON.stringify(userData))

        setUser(userData)
    }

    return(
        <UserContext.Provider value={{user, setUser, login, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return( useContext(UserContext))
}

export default UserContext