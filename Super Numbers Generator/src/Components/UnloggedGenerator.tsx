import React, {useState} from "react";
import {NavBar} from "./NavBar.tsx";
import { motion, AnimatePresence } from "framer-motion"
import {NumbersGenerator} from "./NumbersGenerator.tsx";

export const UnloggedGenerator = () => {

    const [visibility, setVisibility] = useState(true)
    const [numberGenerator, setNumberGenerator] = useState(false)

    return(
        <AnimatePresence>
            <motion.div className='mainPage-container'>
                <NavBar visibility={visibility} visibilitySwitch={setVisibility}/>
                <NumbersGenerator/>
            </motion.div>
        </AnimatePresence>
    )


}