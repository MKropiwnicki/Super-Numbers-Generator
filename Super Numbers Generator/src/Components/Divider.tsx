import React from 'react';
import { motion} from "framer-motion"

export const Divider = () => {
    return(
        <motion.div key={'divider-box'} className='divider-container'>
            <div className='decor'></div>
            <p className='divider'>or</p>
            <div className='decor'></div>
        </motion.div>
    )
}