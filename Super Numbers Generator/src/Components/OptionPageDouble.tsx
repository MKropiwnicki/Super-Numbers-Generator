import {useEffect, useState} from 'react';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { numbersGenerator } from '../numbersGenerator.js'
import { gridGenerator } from '../gridGenerator.js'
import { NumbersGridDouble } from "./NumbersGridDouble.tsx";
import {GeneratedNumbersDouble} from "./GeneratedNumbersDouble.tsx";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AdditionalSetsInput} from "./AdditionalSetsInput.tsx";
import {AdditionalSetsInputDouble} from "./AdditionalSetsInputDouble.tsx";



type OptionPageDoubleProps = {
    rangeMinimum: number | null,
    rangeMaximum: number | null,
    amount: number | null
    rangeMinimumAdditional: number | null,
    rangeMaximumAdditional: number | null,
    amountAdditional: number | null
}


export const OptionPageDouble = ({rangeMinimum, rangeMaximum, amount, rangeMinimumAdditional, rangeMaximumAdditional, amountAdditional}: OptionPageDoubleProps) => {

    const [dataToRender, setDataToRender] = useState<number[]>([]);
    const [dataToRenderAdditional, setDataToRenderAdditional] = useState<number[]>([]);
    const [gridData, setGridData] = useState<number[]>([]);
    const [gridDataAdditional, setGridDataAdditional] = useState<number[]>([]);
    const [numbersList, setNumbersList] = useState(false);
    const [numbersGrid, setNumbersGrid] = useState(false);
    const [visibility, setVisibility] = useState<boolean>(false);

    useEffect(() => {
        const numbersTimeout = setTimeout(() => handleGenerate(), 500);
        return () => clearTimeout(numbersTimeout);
    }, []);

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }


    const handleGenerate = () => {
        const generatedNumbers = numbersGenerator(rangeMinimum, rangeMaximum, amount);
        const generatedNumbersAdditional = numbersGenerator(rangeMinimumAdditional, rangeMaximumAdditional, amountAdditional);
        setDataToRender(generatedNumbers);
        setDataToRenderAdditional(generatedNumbersAdditional);
        grid();
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


    // const containerForm = {
    //     hidden: { opacity: 1, scale: 0 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         transition: {
    //             delayChildren: 1,
    //             staggerChildren: 0.2
    //         }
    //     }
    // };
    //
    // const itemForm = {
    //     hidden: { y: 20, opacity: 0 },
    //     visible: {
    //         y: 0,
    //         opacity: 1
    //     }
    // };


    const grid = () => {
        setGridData(gridGenerator(rangeMinimum, rangeMaximum));
        setGridDataAdditional(gridGenerator(rangeMinimumAdditional, rangeMaximumAdditional));

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
                <div className='bar'>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className={'back-icon'} onClick={handleHome}/>
                </div>
                {numbersList && <GeneratedNumbersDouble dataToRender={dataToRender}
                                                        amount={amount}
                                                        max={rangeMaximum}
                                                        dataToRenderAdditional={dataToRenderAdditional}
                                                        amountAdditional={amountAdditional}
                                                        maxAdditional={rangeMaximumAdditional}
                                                        visibility={visibility}
                                                        visibilitySwitch={setVisibility}
                                                        refresh={handleGenerate}/>}
                {visibility && <AdditionalSetsInputDouble gridVisibilitySwitch={setNumbersGrid}
                                                          rangeMinimum={rangeMinimum}
                                                          rangeMaximum={rangeMaximum}
                                                          amount={amount}
                                                          amountAdditional={amountAdditional}
                                                          minAdditional = {rangeMinimumAdditional}
                                                          maxAdditional={rangeMaximumAdditional}/>}
                {numbersGrid && <NumbersGridDouble data={gridData}
                                                   selectedNumbers={dataToRender}
                                                   dataAdditional={gridDataAdditional}
                                                   selectedNumbersAdditional={dataToRenderAdditional}
                />}

            </motion.div>
        </AnimatePresence>
    )
}