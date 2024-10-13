import { motion } from "framer-motion";
import {faArrowsRotate, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


type GeneratedNumbersProps = {
    dataToRender: Array<number>,
    amount: number | null,
    max: number | null,
    visibility: boolean,
    visibilitySwitch: React.Dispatch<boolean>,
    refresh: ()=> void
}
export const GeneratedNumbers = ({dataToRender, amount, max, visibility, visibilitySwitch, refresh}: GeneratedNumbersProps) => {

    const containerNumbers = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.2
            }
        }
    };

    const itemNumbers = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const handleVisibility = ()=> {
       visibilitySwitch(!visibility);
    }


    return (
        <motion.div className='numbers-wrapper'>
            <motion.h2 className='numbers-text'>Your numbers:</motion.h2>
            <motion.ul className='numbers-box'
                       key={"list"}
                       variants={containerNumbers}
                       initial="hidden"
                       animate="visible">
                {dataToRender.map((element, index) => (
                    <motion.li className='number-circle'
                               key={index}
                               variants={itemNumbers}><p>{element}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h3 className='numbers-text'>{amount} out of {max}</motion.h3>
            <motion.div className='btns-container'>
                <motion.button className={'generator-btn option arrows'}
                               key={"formBtn"}
                               initial={{y: 0, opacity: 0}}
                               animate={{y: 0, opacity: 1}}
                               exit={{y: 0, opacity: 0}}
                               onClick={refresh}
                               layout transition={{duration: 0.1}}
                               type='submit'>
                    <FontAwesomeIcon icon={faArrowsRotate} className={'refresh-icon'}/>
                </motion.button>
                <motion.button className={'add-btn'}
                               key={"addBtn"}
                               initial={{y: 0, opacity: 0}}
                               animate={{y: 0, opacity: 1}}
                               exit={{y: 0, opacity: 0}}
                    onClick={handleVisibility}
                               layout transition={{duration: 0.1}}
                               type='button'>
                    {<FontAwesomeIcon icon={faCirclePlus} className={'add-icon'}/>}
                </motion.button>
            </motion.div>

        </motion.div>

    )
}