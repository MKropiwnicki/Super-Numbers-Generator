import { motion, easeInOut } from "framer-motion"

export const MobileMenu = () => {
    return(
        <motion.div
            key={"menu-box"}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{easeInOut, duration: 0.5}}
            exit={{ y: -1000, opacity: 0}}
            className='mobile-container'>
            <nav className='mobile-menu'>
                <p>Login</p>
                <p>Register</p>
            </nav>
        </motion.div>
    )
}