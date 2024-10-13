import {motion, easeInOut, AnimatePresence} from "framer-motion"
import {faDiceFour, faDiceOne, faDiceThree, faDiceTwo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import React from "react";

type QuickSetMenuProps = {
    minimumDeclaration: React.Dispatch<number>,
    maximumDeclaration: React.Dispatch<number>,
    amountDeclaration: React.Dispatch<number>,
    minimumSecondaryDeclaration: React.Dispatch<number>,
    maximumSecondaryDeclaration: React.Dispatch<number>,
    amountSecondaryDeclaration: React.Dispatch<number>
}

export const QuickSetMenu = ({minimumDeclaration, maximumDeclaration, amountDeclaration, minimumSecondaryDeclaration, maximumSecondaryDeclaration, amountSecondaryDeclaration}: QuickSetMenuProps) => {

    const navigate = useNavigate();

    const handleOptionOne = () => {
        navigate('/quickSet');
        minimumDeclaration(1);
        maximumDeclaration(42);
        amountDeclaration(5);
    }


    const handleOptionTwo = () => {
        navigate('/quickSet');
        minimumDeclaration(1);
        maximumDeclaration(49);
        amountDeclaration(6);
    }

    const handleOptionDouble = () => {
        navigate('/quickSetDouble');
        minimumDeclaration(1);
        maximumDeclaration(50);
        amountDeclaration(5);
        minimumSecondaryDeclaration(1);
        maximumSecondaryDeclaration(12);
        amountSecondaryDeclaration(2);
    }

    const handleOptionCustom = () => {
        navigate('/customGenerator');

    }



    const optionContainer = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: 1
            }
        }
    };

    const optionTile = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return(
        <AnimatePresence>
            <motion.div
                // key={"setMenuBox"}
                // initial={{y: 0, opacity: 0}}
                // animate={{y: 0, opacity: 1}}
                // transition={{easeInOut, duration: 0.5}}
                // exit={{y: 0, opacity: 0}}
                className='sets-container'>
                <motion.div className='sets-menu'
                            key={'setsMenu'}
                            initial="hidden"
                            animate="visible"
                            variants={optionContainer}>
                    <motion.div className={'sets-menu-tile first'}
                                variants={optionTile}
                                key={'5/42Tile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleOptionOne}>
                        <FontAwesomeIcon icon={faDiceOne} className={'sets-icon'}/>
                        <p>5 <span className='smal-txt'>out of</span> 42</p>
                    </motion.div>
                    <motion.div className={'sets-menu-tile second'}
                                variants={optionTile}
                                key={'6/49Tile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleOptionTwo}>
                        <FontAwesomeIcon icon={faDiceTwo} className={'sets-icon'}/>
                        <p>6 <span  className='smal-txt'>out of</span> 49</p>
                    </motion.div>
                    <motion.div className={'sets-menu-tile third'}
                                variants={optionTile}
                                key={'doubleTile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleOptionDouble}>
                        <FontAwesomeIcon icon={faDiceThree} className={'sets-icon'}/>
                        <span>
                            <p>5 <span className='smal-txt'>out of</span> 50 </p>
                            <p>2 <span className='smal-txt'>out of</span> 12</p>
                        </span>
                    </motion.div>
                    <motion.div className={'sets-menu-tile fourth'}
                                variants={optionTile}
                                key={'customTile'}
                                initial="hidden"
                                animate="visible"
                                onClick={handleOptionCustom}>
                        <FontAwesomeIcon icon={faDiceFour} className={'sets-icon'}/>
                        <p>CUSTOM</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}