import {useEffect, useState} from 'react';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { numbersGenerator } from '../numbersGenerator.js'
import { gridGenerator } from '../gridGenerator.js'
import { NumbersGrid } from "./NumbersGrid.tsx";
import {GeneratedNumbers} from "./GeneratedNumbers.tsx";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";



type OptionPageProps = {
    rangeMinimum: number | null,
    rangeMaximum: number | null,
    amount: number | null
}


export const OptionPage = ({rangeMinimum, rangeMaximum, amount}: OptionPageProps) => {

    const [dataToRender, setDataToRender] = useState<number[]>([]);
    const [gridData, setGridData] = useState<number[]>([]);
    const [numbersList, setNumbersList] = useState(false);
    const [numbersGrid, setNumbersGrid] = useState(false);


    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }


    useEffect(() => {
        const numbersTimeout = setTimeout(() => handleGenerate(), 500);
        return () => clearTimeout(numbersTimeout);
    }, []);


    const handleGenerate = () => {
        const generatedNumbers = numbersGenerator(rangeMinimum, rangeMaximum, amount)
        setDataToRender(generatedNumbers);
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
                <div className='bar'>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className={'back-icon'} onClick={handleHome}/>
                </div>
                {numbersList && <GeneratedNumbers dataToRender={dataToRender} amount={amount} max={rangeMaximum}
                                                  refresh={handleGenerate}/>}
                {numbersGrid && <NumbersGrid data={gridData} selectedNumbers={dataToRender}/>}

            </motion.div>
        </AnimatePresence>
    )
}