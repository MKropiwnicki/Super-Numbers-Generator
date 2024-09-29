import {useNavigate} from "react-router-dom";




export const StartBtn = () => {

    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/quickMenu');
    }

    return(
            <button className='homePage-btn' onClick={handleStart}>Start</button>
    )
}