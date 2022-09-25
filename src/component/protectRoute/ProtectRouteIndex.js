import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

function ProtectRouteIndex({ children }) {
    const { userToken } = useSelector((state) => state.userToken)
    
    if (userToken) {
        return (children ? children : <Outlet />)
    }
    return (<Navigate to={'/'} replace />)

    
}

export default ProtectRouteIndex

