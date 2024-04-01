import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from "@uidotdev/usehooks";
import { MainPage } from "./Components/MainPage.tsx";
import { LoginPage } from "./Components/LoginPage.tsx";
import { RegisterPage } from "./Components/RegisterPage.tsx";
import { UnloggedGenerator } from "./Components/UnloggedGenerator.tsx";
import { ThemeContext } from "./Context/ThemeContext.tsx";
import { useState } from "react";
import { NavBar } from "./Components/NavBar.tsx";
import { AuthContextProvider } from "./Context/AuthContext2.tsx";
import { ProtectedRoute} from "./Components/ProtectedRoute.tsx";
import {Dashboard} from "./Components/Dashboard.tsx";

export const App = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [visibility, setVisibility] = useState(true);
    const [isLogged, setIsLogged] = useState<boolean>(false);


    const handleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }


    return(
        <AuthContextProvider>
            <ThemeContext.Provider value={{theme, handleTheme}}>
                <div className='App' id={theme}>
                    <div className={`${isLogged ? 'logged-background' : 'gradient-animation-container'}`}>
                        {!isLogged && (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="blur-filter">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                            <feColorMatrix in="blur" mode="matrix"
                                                           values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                                           result="blur-filter"/>
                                            <feBlend in="SourceGraphic" in2="blur-filter"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="gradients-container">
                                    <div className="gradient-1"></div>
                                    <div className="gradient-2"></div>
                                    <div className="gradient-3"></div>
                                    <div className="gradient-4"></div>
                                    <div className="gradient-5"></div>
                                </div>
                            </>
                        )}
                        {/*<svg xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <defs>*/}
                        {/*        <filter id="blur-filter">*/}
                        {/*            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>*/}
                        {/*            <feColorMatrix in="blur" mode="matrix"*/}
                        {/*                           values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"*/}
                        {/*                           result="blur-filter"/>*/}
                        {/*            <feBlend in="SourceGraphic" in2="blur-filter"/>*/}
                        {/*        </filter>*/}
                        {/*    </defs>*/}
                        {/*</svg>*/}
                        {/*<div className="gradients-container">*/}
                        {/*    <div className="gradient-1"></div>*/}
                        {/*    <div className="gradient-2"></div>*/}
                        {/*    <div className="gradient-3"></div>*/}
                        {/*    <div className="gradient-4"></div>*/}
                        {/*    <div className="gradient-5"></div>*/}
                        {/*</div>*/}
                        <div className='app-wrapper'>
                            <Router>
                                <Routes>
                                    <Route path='/'
                                           element={
                                               <>
                                                   <NavBar visibility={visibility} visibilitySwitch={setVisibility}
                                                           themeToggle={handleTheme} theme={theme}/>
                                                   <MainPage visibility={visibility}/>
                                               </>

                                           }
                                    />
                                    <Route
                                        path='/unloggedGenerator'
                                        element={
                                            <>
                                                <NavBar visibility={visibility} visibilitySwitch={setVisibility}
                                                        themeToggle={handleTheme} theme={theme}/>
                                                <UnloggedGenerator/>
                                            </>
                                        }
                                    />
                                    <Route
                                        path='/login'
                                        element={
                                            <LoginPage visibilitySwitch={setVisibility} logSwitch={setIsLogged}/>
                                        }
                                    />
                                    <Route
                                        path='/register'
                                        element={
                                            <RegisterPage visibilitySwitch={setVisibility} logStatus={isLogged}
                                                          logSwitch={setIsLogged}/>
                                        }
                                    />
                                    <Route
                                        path='/dashboard'
                                        element={
                                            <ProtectedRoute>
                                                <Dashboard  logSwitch={setIsLogged}/>
                                            </ProtectedRoute>
                                        }
                                    />
                                </Routes>
                            </Router>
                        </div>

                    </div>

                </div>
            </ThemeContext.Provider>
        </AuthContextProvider>


    )
}


