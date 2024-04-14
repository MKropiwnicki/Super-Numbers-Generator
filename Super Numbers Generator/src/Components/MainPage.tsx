import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { NumberBall } from "./NumberBall.tsx";
import {StartBtn} from "./StartBtn.tsx";
// import {LoginBtn} from "./LoginBtn.tsx";

type MainPageProps = {
    visibility: boolean
}

export const MainPage = ({visibility}: MainPageProps) => {




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
                            <p className='homePage-text'>You can quick start or login and use extra features.</p>
                            <div className='btns-container'>
                                <StartBtn/>
                                {/*<LoginBtn/>*/}
                            </div>
                        </motion.div>}
                    </motion.div>
                </AnimatePresence>
            )


}