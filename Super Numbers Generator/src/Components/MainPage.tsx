import { useState } from "react";
import { NavBar } from "./NavBar.tsx";
import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { Start } from "./Start.tsx";
import { Divider } from "./Divider.tsx";
import { Login } from "./Login.tsx";

export const MainPage = () => {

    const [visibility, setVisibility] = useState(true);



        return(
                <AnimatePresence>
                    <motion.div className='mainPage-container'>
                        <NavBar visibility={visibility} visibilitySwitch={setVisibility}/>
                        {visibility && <motion.div key={"menu-box"}
                                                   initial={{y: 1000, opacity: 0}}
                                                   animate={{y: 0, opacity: 1}}
                                                   transition={{easeInOut, duration: 0.5}}
                                                   exit={{y: 1000, opacity: 0}}
                                                   className='body-container'>
                            <Start />
                            <Divider/>
                            <Login/>
                        </motion.div>}
                    </motion.div>
                </AnimatePresence>
            )


}