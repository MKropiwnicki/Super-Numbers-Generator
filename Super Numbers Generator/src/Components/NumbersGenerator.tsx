import { useState, FormEvent } from 'react';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { numbersGenerator } from '../numbersGenerator.js'
import { gridGenerator } from '../gridGenerator.js'
import { NumbersGrid } from "./NumbersGrid.tsx";
import {GeneratedNumbers} from "./GeneratedNumbers.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";





export const NumbersGenerator = () => {

    const [rangeMinimum, setRangeMinimum] = useState<number | null>(null);
    const [rangeMaximum, setRangeMaximum] = useState<number | null>(null);
    const [amount, setAmount] = useState<number | null>(null);
    const [dataToRender, setDataToRender] = useState<number[]>([]);
    const [gridData, setGridData] = useState<number[]>([]);
    const [numbersList, setNumbersList] = useState(false);
    const [numbersGrid, setNumbersGrid] = useState(false);
    const [refreshIcon, setRefreshIcon] = useState(false);



const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    const generatedNumbers = numbersGenerator(rangeMinimum, rangeMaximum, amount)
    setDataToRender(generatedNumbers);
    grid();
    setNumbersGrid(true);
    setNumbersList(true);

    if(rangeMinimum !== null && rangeMaximum !== null && amount !== null) {
        setRefreshIcon(true);
    }
}



    let btnContent;
    let refreshed;

    if (refreshIcon) {
        btnContent = <FontAwesomeIcon icon={faArrowsRotate} className={'refresh-icon'}/>;
        refreshed = 'arrows'
    } else {
        btnContent =  <p>Generate</p>;
        refreshed = '';
    }

    const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0,
                staggerChildren: 0.2
            }
        }
    };

    // const itemBtn = {
    //     hidden: { y: 0, opacity: 0 },
    //     visible: {
    //         y: 0,
    //         opacity: 1
    //     }
    // };

    const containerForm = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    };

    const itemForm = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    // const spring = {
    //     type: "spring",
    //     stiffness: 800,
    //     damping: 25
    // };

    const grid = () => {
        setGridData(gridGenerator(rangeMinimum, rangeMaximum))
    }


    return(
        <AnimatePresence>
            <motion.div className='generator-wrapper'
                        key={"wrapper"}
                        initial={{y: 0, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{easeInOut, duration: 0.5}}
                        exit={{y: 0, opacity: 0}}
                        variants={container}>
                <motion.div className='generator-container'
                            key={"generator"}
                            initial={{y: 0, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{easeInOut, duration: 0.5}}
                            exit={{y: 0, opacity: 0}}
                            variants={container}>
                    <motion.div className='form-container'>
                        <motion.form className='numbers-form'
                                     variants={containerForm}
                                     initial="hidden"
                                     animate="visible">
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-min'>Minimum:</label>
                                <input value={rangeMinimum?.toString()} onChange={(e) => setRangeMinimum(+e.target.value)}
                                       type='number'
                                       id='range-min'
                                       placeholder=''/>
                            </motion.div>
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-max'>Maximum:</label>
                                <input value={rangeMaximum?.toString()} onChange={(e) => setRangeMaximum(+e.target.value)}
                                       type='number'
                                       id='range-max'
                                       placeholder=''/>
                            </motion.div>
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-max'>How many?</label>
                                <input
                                    value={amount?.toString()} onChange={(e) => setAmount(+e.target.value)}
                                    type='number'
                                    id='amount'
                                    placeholder=''/>
                            </motion.div>
                            <motion.button className={`generator-btn ${refreshed}`}
                                           key={"formBtn"}
                                           // initial={{y: 0, opacity: 0}}
                                           // animate={{y: 0, opacity: 1}}
                                           // exit={{y: 0, opacity: 0}}
                                           onClick={handleGenerate}
                                           layout transition={{duration: 0.1}}
                                           type='submit'>{btnContent}
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
                {numbersList && <GeneratedNumbers dataToRender={dataToRender} amount={amount} max={rangeMaximum}/>}
                {numbersGrid && <NumbersGrid data={gridData} selectedNumbers={dataToRender}/>}
            </motion.div>
        </AnimatePresence>
    )
}