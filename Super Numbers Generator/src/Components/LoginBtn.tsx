import {useNavigate} from "react-router-dom";

export const LoginBtn = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }

    return(
        <button className='login-btn' onClick={handleLogin}>Login</button>
    )
}