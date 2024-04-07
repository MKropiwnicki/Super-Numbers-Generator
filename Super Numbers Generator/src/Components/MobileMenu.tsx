import {motion, easeInOut, AnimatePresence} from "framer-motion"
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

    const containerTile = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: 1
            }
        }
    };

    const itemTile = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return(
        <AnimatePresence>
            <motion.div
                key={"menuBox"}
                initial={{y: 0, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{easeInOut, duration: 0.5}}
                exit={{y: 0, opacity: 0}}
                className='mobile-container'>
                <motion.div className='mobile-menu'
                            key={'mobileMenu'}
                            initial="hidden"
                            animate="visible"
                            variants={containerTile}>
                    <motion.div className={'mobile-menu-tile'}
                                variants={itemTile}
                                key={'loginTile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleLogin}>
                        <FontAwesomeIcon icon={faUser} className={'menu-icon'}/>
                        <p>Login</p>
                    </motion.div>
                    <motion.div className={'mobile-menu-tile'}
                                variants={itemTile}
                                key={'registerTile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleRegister}>
                        <FontAwesomeIcon icon={faAddressCard} className={'menu-icon'}/>
                        <p>Register</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}