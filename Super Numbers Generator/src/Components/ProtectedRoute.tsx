import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext2.tsx';



interface ProtectedRouteProps {
    children: React.ReactNode,
    // logStatus: boolean,
    // logSwitch: React.Dispatch<boolean>

}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const authContext = UserAuth();

    if (!authContext) {
        console.error("login is undefined");
        return;
    } else {
        console.log('nie można zalogować');
    }

    if (authContext.user) {
        console.log('user jest');
        return children;
    } else {
        return <Navigate to='/' />;
    }
};