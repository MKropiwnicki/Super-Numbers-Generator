import {createContext} from "react";

type ThemeContextType = {
    theme: string;
    handleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    handleTheme: () => {}
});