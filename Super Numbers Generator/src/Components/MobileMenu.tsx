import { motion, easeInOut } from "framer-motion"
import {faAddressCard, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

export const MobileMenu = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }


    const handleRegister = () => {
        navigate('/register')
    }


    return(
        <motion.div
            key={"menu-box"}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{easeInOut, duration: 0.5}}
            exit={{ y: 0, opacity: 0}}
            className='mobile-container'>
            <nav className='mobile-menu'>
                <div className={'mobile-menu-tile'} onClick={handleLogin}>
                    <FontAwesomeIcon icon={faUser} className={'menu-icon'}/>
                    <p>Login</p>
                </div>
                <div className={'mobile-menu-tile'} onClick={handleRegister}>
                    <FontAwesomeIcon icon={faAddressCard} className={'menu-icon'}/>
                    <p>Register</p>
                </div>

            </nav>
        </motion.div>
    )
}