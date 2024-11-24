import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const Authenticated = () => {
    const { user } = useSelector((state) => state);
    if (!user.token) return <Navigate to='/login' />
    return (
        <Outlet />
    )
}

export default Authenticated