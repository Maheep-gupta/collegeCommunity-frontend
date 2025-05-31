import React, { useState, useEffect } from 'react';
import userContext from './UserContext';

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (userData) => {
        setUser(userData.user);
        localStorage.setItem('user', JSON.stringify(userData.user));
        localStorage.setItem('token', userData.token); // token is already a string

        setIsAdmin(userData.user.isAdmin === true);
    };

    const logout = () => {
        setUser(null);
        setIsAdmin(false);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    // Optional: Auto-login from localStorage on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAdmin(parsedUser.isAdmin === true);
        }
    }, []);

    return (
        <userContext.Provider value={{ user, isAdmin, login, logout }}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;
