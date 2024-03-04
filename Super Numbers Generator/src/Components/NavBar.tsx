import React, {useState} from 'react';
import {ThemeBtn} from "./ThemeBtn.tsx";
import {Hamburger} from "./Hamburger.tsx";
import {MobileMenu} from "./MobileMenu.tsx";
import { motion, AnimatePresence } from "framer-motion"
import {useNavigate} from "react-router-dom";


export const NavBar = ({visibility, visibilitySwitch}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    const [theme, setTheme] = useState(false);
    const [clicked, setClicked] = useState(false)

    return(
        <>
            <AnimatePresence>
                <motion.div key={'nav-box'} className='navigation-container'>
                    <h1 className='main-title' onClick={handleNavigate}>SNG</h1>
                    <nav className='menu-container'>
                        <button className='menu-btn'>Login</button>
                        <button className='menu-btn'>Register</button>
                        <ThemeBtn theme={theme} themeSwitch={setTheme}/>
                        <Hamburger clicked={clicked} menuSwitch={setClicked} visibility={visibility} visibilitySwitch={visibilitySwitch}/>
                    </nav>
                </motion.div>
                {clicked && <MobileMenu/>}
            </AnimatePresence>

        </>


    )
}

