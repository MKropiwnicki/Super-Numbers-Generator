import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


type ThemeBtnProps = {
    theme: boolean,
    themeSwitch: React.Dispatch<boolean>;
}

export const ThemeBtn = ({theme, themeSwitch}: ThemeBtnProps) => {

    const handleTheme = () => {
        themeSwitch(!theme);
    }

    let icon;

      if (!theme) {
          icon = <FontAwesomeIcon icon={faMoon} className={'theme-icon'}/>;
      } else {
         icon =  <FontAwesomeIcon icon={faSun} className={'theme-icon'}/>;
      }

    return (
        <button className={`theme-btn ${theme ? 'dark' : 'light'}`} onClick={handleTheme}>{icon}</button>
    )
}