import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { NumberBall } from "./NumberBall.tsx";
// import {StartBtn} from "./StartBtn.tsx";
// import {useNavigate} from "react-router-dom";
import React from "react";
import {QuickSetMenu} from "./QuickSetMenu.tsx";
// import {LoginBtn} from "./LoginBtn.tsx";

type MainPageProps = {
    visibility: boolean,
    visibilitySwitch: React.Dispatch<boolean>,
    optionsVisibility: boolean,
    optionsVisibilitySwitch: React.Dispatch<boolean>,
    minimumDeclaration: React.Dispatch<number>,
    maximumDeclaration: React.Dispatch<number>,
    amountDeclaration: React.Dispatch<number>
    minimumSecondaryDeclaration: React.Dispatch<number>,
    maximumSecondaryDeclaration: React.Dispatch<number>,
    amountSecondaryDeclaration: React.Dispatch<number>
}

export const MainPage = ({visibility, visibilitySwitch, optionsVisibility, optionsVisibilitySwitch, minimumDeclaration, maximumDeclaration, amountDeclaration, minimumSecondaryDeclaration, maximumSecondaryDeclaration, amountSecondaryDeclaration}: MainPageProps) => {



        const handleStart = () => {
            visibilitySwitch(false);
            optionsVisibilitySwitch(true);
        }


        return(
                <AnimatePresence>
                    <motion.div className='mainPage-container'>
                        {visibility && <motion.div key={"menuBox"}
                                                   initial={{y: 0, opacity: 0}}
                                                   animate={{y: 0, opacity: 1}}
                                                   transition={{easeInOut, duration: 0.8}}
                                                   exit={{y: 0, opacity: 0}}
                                                   className='body-container'>
                            <NumberBall/>
                            <h1 className='homePage-title'>Welcome to Super Numbers Generator!</h1>
                            {/*<p className='homePage-text'>You can quick start or login and use extra features.</p>*/}
                            <div className='btns-container'>
                                <button className='homePage-btn' onClick={handleStart}>Start</button>
                            </div>
                        </motion.div>}
                        {optionsVisibility && <QuickSetMenu minimumDeclaration={minimumDeclaration}
                                                            maximumDeclaration={maximumDeclaration}
                                                            amountDeclaration={amountDeclaration}
                                                            minimumSecondaryDeclaration={minimumSecondaryDeclaration}
                                                            maximumSecondaryDeclaration={maximumSecondaryDeclaration}
                                                            amountSecondaryDeclaration={amountSecondaryDeclaration}
                        />}
                    </motion.div>
                </AnimatePresence>
            )


}