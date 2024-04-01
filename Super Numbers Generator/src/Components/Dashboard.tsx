import {UserAuth} from "../Context/AuthContext2.tsx";
import {useNavigate} from "react-router-dom";
import React from "react";


interface DashboardProps {
    logSwitch: React.Dispatch<boolean>

}

export const Dashboard = ({logSwitch}: DashboardProps) => {

    const authContext = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        if (!authContext) {
            console.error("login is undefined");
            return;
        } else {
            console.log('błąd wylogowania');
        }

        try {
            await authContext.logout();
            navigate('/');
            console.log('You are logged out')
            logSwitch(false);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    return (
        <div>
            <h1>ZALOGOWANO</h1>
            <button onClick={handleLogout}>WYLOGUJ</button>

        </div>
    )


}