import React from 'react';



export const Hamburger = ({clicked, menuSwitch, visibility, visibilitySwitch}) => {

    const handleMenu = () => {
        menuSwitch(!clicked);
        visibilitySwitch(!visibility)
    }

    let click;

    if(clicked) {
        click = 'clicked'
    } else {
        click = ''
    }

    return (
        <div className={`hamburger-container ${click}`} onClick={handleMenu}>
            <div className='top-bar'></div>
            <div className='middle-bar'></div>
            <div className='bottom-bar'></div>
        </div>

)
}