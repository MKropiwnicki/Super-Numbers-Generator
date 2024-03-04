import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { numbersGenerator } from '../numbersGenerator.js'
import { gridGenerator } from '../gridGenerator.js'
import { NumbersGrid } from "./NumbersGrid.tsx";
import {GeneratedNumbers} from "./GeneratedNumbers.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NumbersGenerator = () => {

    const [rangeMinimum, setRangeMinimum] = useState(0);
    const [rangeMaximum, setRangeMaximum] = useState(0);
    const [amount, setAmount] = useState(0);
    const [dataToRender, setDataToRender] = useState([]);
    const [gridData, setGridData] = useState([]);
    const [buttonClick, setButtonClick] = useState(0);
    const [numbersList, setNumbersList] = useState(false);
    const [numbersGrid, setNumbersGrid] = useState(false);

    // useEffect(() => {
    //     const generatedNumbers = numbersGenerator(rangeMinimum, rangeMaximum, amount)
    //     setDataToRender(generatedNumbers);
    // }, [buttonClick]);


const handleGenerate = (e) => {
    e.preventDefault();
    const generatedNumbers = numbersGenerator(rangeMinimum, rangeMaximum, amount)
    setDataToRender(generatedNumbers);
    grid();
    setButtonClick(prevState => prevState + 1);
    setNumbersGrid(true);
    setNumbersList(true);
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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

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

    const containerNumbers = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.4
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

    const grid = () => {
        setGridData(gridGenerator(rangeMinimum, rangeMaximum))
    }



    return(
        <AnimatePresence>
            <motion.div className='generator-wrapper'
                        key={"wrapper"}
                        initial={{y: 1000, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{easeInOut, duration: 0.5}}
                        exit={{y: 1000, opacity: 0}}
                        variants={container}>
                <motion.div className='generator-container'
                            key={"generator"}
                            initial={{y: 1000, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{easeInOut, duration: 0.5}}
                            exit={{y: 1000, opacity: 0}}
                            variants={container}>
                    <motion.div className='form-container'>
                        <motion.form className='numbers-form'
                                     variants={containerForm}
                                     initial="hidden"
                                     animate="visible">
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-min'>Minimum:</label>
                                <input value={rangeMinimum} onChange={(e) => setRangeMinimum(+e.target.value)}
                                       type='number'
                                       id='range-min'
                                       placeholder=''/>
                            </motion.div>
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-max'>Maximum:</label>
                                <input value={rangeMaximum} onChange={(e) => setRangeMaximum(+e.target.value)}
                                       type='number'
                                       id='range-max'
                                       placeholder=''/>
                            </motion.div>
                            <motion.div
                                variants={itemForm}>
                                <label htmlFor='range-max'>How many?</label>
                                <input
                                    value={amount} onChange={(e) => setAmount(+e.target.value)}
                                       type='number'
                                       id='amount'
                                       placeholder=''/>
                            </motion.div>
                            <motion.button variants={item} className='generator-btn' onClick={handleGenerate}
                                           type='submit'>Generate
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