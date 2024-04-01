import { motion, AnimatePresence } from "framer-motion"
import { NumbersGenerator } from "./NumbersGenerator.tsx";

export const UnloggedGenerator = () => {

    return(
        <AnimatePresence>
            <motion.div className='mainPage-container'>
                <NumbersGenerator/>
            </motion.div>
        </AnimatePresence>
    )
}