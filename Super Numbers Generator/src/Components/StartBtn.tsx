import React from "react";
import {useNavigate} from "react-router-dom";

export const StartBtn = ({visibility, visibilitySwitch, numGen, numGenSwitch}) => {

    const navigate = useNavigate();
    const handleStart = () => {
        // visibilitySwitch(!visibility)
        // numGenSwitch(!numGen)
        navigate('/unloggedGenerator');
    }

    return(
            <button className='start-btn' onClick={handleStart}>Start</button>
    )
}