import React, { useState } from 'react'
import userContext from './UserContext'

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)

    const login = (userData) => {
        setUser(userData);
        //  store token in localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // logic to set is admin based on userData
    };
    

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        setIsAdmin(false);
    };
    return (
        <userContext.Provider value={{ user, login, logout,isAdmin }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider