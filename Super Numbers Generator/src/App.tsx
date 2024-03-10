import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MainPage} from "./Components/MainPage.tsx";
import {UnloggedGenerator} from "./Components/UnloggedGenerator.tsx";

export const App = () => {


    return(

        <Router>
            <Routes>
                <Route path='/'
                       element={<MainPage/>}
                />
                <Route
                    path='/unloggedGenerator'
                    element={
                    <UnloggedGenerator />
                    }
                />
            </Routes>
        </Router>
    )
}


