import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const numbersToRender = ['23', '49', '4', '16', '9', '11', '3', '14', '33', '19', '42', '1', '24', '6', '37'];

export const NumberBall = () => {


    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => (prevCounter === numbersToRender.length - 1 ? 0 : prevCounter + 1));
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);



    return(
        <div className='ball-border'>
           <motion.p
               key={numbersToRender[counter]}
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                   duration: 0.5,
                   ease: [0, 0.71, 0.2, 1.01],
                   scale: {
                       type: "spring",
                       damping: 5,
                       stiffness: 200,
                       restDelta: 0.001
                   }
               }}
           >{numbersToRender[counter]}</motion.p>
        </div>
    )
}