import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


type ThemeBtnProps = {
    theme: string,
    themeToggle: React.Dispatch<void>
}

export const ThemeBtn = ({theme, themeToggle}: ThemeBtnProps) => {

    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
        themeToggle();
    };


    let icon;

      if (theme === 'dark') {
          icon = <FontAwesomeIcon icon={faMoon} className={'theme-icon-dark'}/>;
      } else {
         icon =  <FontAwesomeIcon icon={faSun} className={'theme-icon-light'}/>;
      }

    return (
            <div className={`theme-btn-border ${theme === 'light' ? 'light' : 'dark'}`} onClick={handleClick}>
                <div className={`icon-circle ${theme === 'light' ? 'light' : 'dark'}`}>
                    {icon}
                </div>
            </div>
    // <button className={`theme-btn ${theme === 'light' ? 'dark' : 'light'}`} onClick={handleClick}>{icon}</button>
)
}