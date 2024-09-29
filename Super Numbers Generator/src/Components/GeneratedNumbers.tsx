import { motion } from "framer-motion";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type GeneratedNumbersProps = {
    dataToRender: Array<number>,
    amount: number | null,
    max: number | null,
    refresh: ()=> void
}
export const GeneratedNumbers = ({dataToRender, amount, max, refresh}: GeneratedNumbersProps) => {

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
                <motion.button className={'generator-btn option arrows'}
                               key={"formBtn"}
                    // initial={{y: 0, opacity: 0}}
                    // animate={{y: 0, opacity: 1}}
                    // exit={{y: 0, opacity: 0}}
                               onClick={refresh}
                               layout transition={{duration: 0.1}}
                               type='submit'>{<FontAwesomeIcon icon={faArrowsRotate} className={'refresh-icon'}/>}
                </motion.button>
            </motion.div>

    )
}