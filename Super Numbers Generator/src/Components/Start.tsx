import React from 'react';
import {StartBtn} from "./StartBtn.tsx";
import {useNavigate} from "react-router-dom";

export const Start = ({visibility, visibilitySwitch, numGen, numGenSwitch}) => {

    const navigate = useNavigate();

    return (
        <div className='start-btn-container'>
            <h2>Welcome to Super Numbers Generator!</h2>
            <StartBtn visibility={visibility} visibilitySwitch={visibilitySwitch} numGen={numGen} numGenSwitch={numGenSwitch}/>
            <p>...and generate your numbers now.</p>
        </div>
    )
}