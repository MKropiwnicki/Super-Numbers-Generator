// import {useEffect, useState} from 'react';
import { motion} from "framer-motion";
import React, {useState} from "react";
import {numbersGenerator} from "../numbersGenerator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
// import { numbersGenerator } from '../numbersGenerator.js'
// import { gridGenerator } from '../gridGenerator.js'
// import { NumbersGrid } from "./NumbersGrid.tsx";
// import {GeneratedNumbers} from "./GeneratedNumbers.tsx";




type AdditionalSetsInputProps = {
    gridVisibilitySwitch: React.Dispatch<boolean>,
    rangeMinimum: number | null,
    rangeMaximum: number | null,
    amount: number | null
}


export const AdditionalSetsInput = ({gridVisibilitySwitch, rangeMinimum, rangeMaximum, amount}: AdditionalSetsInputProps) => {

    const [addButton, setAddButton] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [additionalSetsData, setAdditionalSetsData] = useState<number[][]>([]);
    const [refreshIcon, setRefreshIcon] = useState(false);


    const handleAddButton = () => {
        setAddButton(true);
    }

    const handleOptionChange = (value: number) => {
        setSelectedOption(value);
    };

    const handleAdditionalSetsData = (e: React.FormEvent) => {
       e.preventDefault();

       if(selectedOption) {
           const newSets = [];

           for (let i = 0; i < selectedOption; i++) {
               const additionalSet = numbersGenerator(rangeMinimum, rangeMaximum, amount);
               newSets.push(additionalSet);
           }

           setAdditionalSetsData(newSets);

           if(additionalSetsData.length > 0) {
               setRefreshIcon(true);
               gridVisibilitySwitch(false);
           }
           setRefreshIcon(true);
           gridVisibilitySwitch(false);
       }


    }


    const containerOptions = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.05
            }
        }
    };

    const containerList = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.05
            }
        }
    };

    const itemOptions = {
        hidden: { y: 0, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const listItem = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    let btnContent;
    let refreshed;

    if (refreshIcon) {
        btnContent = <FontAwesomeIcon icon={faArrowsRotate} className={'set-refresh-icon'}/>;
        refreshed = 'sets-arrows'
    } else {
        btnContent =  <p>ADD</p>;
        refreshed = '';
    }


    return (
        <>
            <motion.div className='options-container'>
                <motion.h3 className='numbers-text'>Add more sets:</motion.h3>
                <motion.form className='radio-form'
                             key={"setOptions"}
                             variants={containerOptions}
                             initial="hidden"
                             animate="visible"
                             onClick={handleAddButton}
                             onSubmit={handleAdditionalSetsData}>
                    <motion.div className='option-list'
                                key={"setOptions"}
                                variants={containerOptions}
                                initial="hidden"
                                animate="visible">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <motion.div className={`option-wrapper ${selectedOption === num ? 'radio-selected' : ''}`}
                                        key={`setOption-${num}`}
                                        variants={itemOptions}>
                                <label htmlFor={`set${num}`}>{num}</label>
                                <input
                                    type='radio'
                                    id={`set${num}`}
                                    value={num}
                                    name="setOption"
                                    onChange={() => handleOptionChange(num)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    {addButton && <motion.button className={`addSet-btn ${refreshed}`}
                                                 key={"addSetBtn"}
                                                 layout transition={{duration: 0.1}}
                                                 type='submit'>
                        {btnContent}
                    </motion.button>}
                </motion.form>
            </motion.div>
            <motion.ul className='additionalSets-container'>
                {additionalSetsData.map((element, index) => (
                    <motion.ul className='additionalSetsList'
                               key={index}
                               variants={containerList}
                               initial="hidden"
                               animate="visible">
                        {element.map((item, index) => (
                            <motion.div className='additional-number-circle'
                                       key={index}
                                       variants={listItem}><p>{item}</p>
                            </motion.div>
                        ))}
                    </motion.ul>
                ))}

            </motion.ul>
        </>

    )
}
