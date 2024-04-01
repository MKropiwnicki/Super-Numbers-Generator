import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { Start } from "./Start.tsx";
import { Divider } from "./Divider.tsx";
import { Login } from "./Login.tsx";

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
                            <Start />
                            <Divider/>
                            <Login/>
                        </motion.div>}
                    </motion.div>
                </AnimatePresence>
            )


}