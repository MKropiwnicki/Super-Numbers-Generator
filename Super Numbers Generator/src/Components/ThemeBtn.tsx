import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


export const ThemeBtn = ({theme, themeSwitch}) => {

    const handleTheme = () => {
        themeSwitch(!theme);
    }

    let icon;

      if (!theme) {
          icon = <FontAwesomeIcon icon={faMoon}/>;
      } else {
         icon =  <FontAwesomeIcon icon={faSun}/>;
      }

    return (
        <button className={`theme-btn ${theme ? 'dark' : 'light'}`} onClick={handleTheme} >{icon}</button>
    )
}