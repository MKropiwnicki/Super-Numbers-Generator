import React from 'react';


type HamburgerProps = {
    clicked: boolean,
    menuSwitch: React.Dispatch<boolean>,
    visibility: boolean,
    visibilitySwitch: React.Dispatch<boolean>
}

export const Hamburger = ({clicked, menuSwitch, visibility, visibilitySwitch}: HamburgerProps) => {

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