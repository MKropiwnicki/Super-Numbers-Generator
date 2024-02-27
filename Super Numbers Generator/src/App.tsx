import { useState } from 'react'

export const App = () => {

    const [basicState, setBasicState] = useState(true);

    return(
        <div>
            <div>
                <p>SNG</p>
            </div>
            <div>
                <button>Login</button>
                <button>Register</button>
                <button>Dark mode</button>
                <button>Language switch</button>
            </div>
            <div>
                <button>Start</button>
                <div>
                    basic app body
                </div>
            </div>
        </div>
    )
}


