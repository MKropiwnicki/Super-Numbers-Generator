import { motion } from "framer-motion";


type NumbersGridDoubleProps = {
    data: number[],
    selectedNumbers: number[],
    dataAdditional: number[],
    selectedNumbersAdditional: number[]

}

export const NumbersGridDouble  = ({data, selectedNumbers, dataAdditional, selectedNumbersAdditional}: NumbersGridDoubleProps) => {

    const containerNumbers = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.05
            }
        }
    };

    const itemNumbers = {
        hidden: { y: 0, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <>
            <motion.ul className='numbers-grid double'
                       key={"grid"}
                       variants={containerNumbers}
                       initial="hidden"
                       animate="visible">
                {data.map((element, index) => (
                    <motion.li className={`grid-circle ${selectedNumbers.includes(element) ? 'selected' : ''}`}
                               key={index}
                               variants={itemNumbers}
                    ><p>{element}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.ul className='numbers-grid double secondary'
                       key={"grid"}
                       variants={containerNumbers}
                       initial="hidden"
                       animate="visible">
                {dataAdditional.map((element, index) => (
                    <motion.li className={`grid-circle ${selectedNumbersAdditional.includes(element) ? 'selected' : ''}`}
                               key={index}
                               variants={itemNumbers}
                    ><p>{element}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </>

    )
}