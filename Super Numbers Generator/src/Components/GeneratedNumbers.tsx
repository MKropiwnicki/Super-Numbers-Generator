import { motion } from "framer-motion";

type GeneratedNumbersProps = {
    dataToRender: Array<number>,
    amount: number,
    max: number
}
export const GeneratedNumbers = ({dataToRender, amount, max}: GeneratedNumbersProps) => {

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
        <>
            <motion.h2>Your numbers:</motion.h2>
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
            <motion.h3>{amount} out of {max}</motion.h3>
        </>

    )
}