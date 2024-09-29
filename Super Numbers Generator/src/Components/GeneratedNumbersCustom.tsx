import { motion } from "framer-motion";

type GeneratedNumbersCustomProps = {
    dataToRender: Array<number>,
    amount: number | null,
    max: number | null
}
export const GeneratedNumbersCustom = ({dataToRender, amount, max}: GeneratedNumbersCustomProps) => {

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
        </motion.div>

    )
}