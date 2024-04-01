import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCirclePlus, faEnvelope, faLock, faFaceSmileBeam, faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserAuth } from "../Context/AuthContext2.tsx";
import React, {useState} from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

type RegisterPageProps = {
    visibilitySwitch: React.Dispatch<boolean>,
    logStatus: boolean,
    logSwitch: React.Dispatch<boolean>
}

export const RegisterPage = ({visibilitySwitch, logStatus, logSwitch}: RegisterPageProps) => {

    const [error, setError] = useState<string>('');
    const [successModal, setSuccessModal] = useState<boolean>(false);
    const [errorModal, setErrorModal] = useState<boolean>(false);
    const [regFail, setRegFail] = useState<boolean>(false);

    const authContext = UserAuth();
    // console.log(authContext);

    type RegisterFormFields = {
        email: string,
        password: string;
    }

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
        visibilitySwitch(true);
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleDashboard = () => {
        navigate('/dashboard');
        logSwitch(!logStatus);
    }

    const handleClose = () => {
        setErrorModal(false);
        setRegFail(false);
    }

    const createNewUserDocument = async (uid: string, email: string) => {
        const userData = {
            games: [],
            favourite: [],
            lucky: [],
            userId: uid,
            email,
        };

        try {
            await setDoc(doc(db, "users", uid), userData)
            return true
        } catch (e) {
            console.error("Error adding document: ", (e as Error).message);
            return false
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<RegisterFormFields>();


    const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {

        if (!authContext) {
            console.error("Auth context is undefined");
            return;
        } else {
            console.log(authContext);
        }

        try {
            await authContext.createUser(data.email, data.password);
            // const userAccount = await createUserWithEmailAndPassword(auth, data.email, data.password);
            if (authContext && authContext.user) {
                // console.log(authContext.user);
                const registrationSuccessful = await createNewUserDocument(authContext.user.uid, data.email);
                if (registrationSuccessful) {
                    console.log('rejestracja działa, dokument użytkownika założony')
                    setSuccessModal(true);
                    reset();
                } else {
                    setError("Registration failed.");
                    console.log('rejestracja nie działa, dokument nie założony')
                    reset();
                }
            } else {
                setError("Registration failed.");
                console.log('rejestracja nie działa')
                setRegFail(true);
            }
        } catch (e) {
            setError((e as Error).message);
            console.log(error);
            setErrorModal(true);
            reset();
        }


    }



    return(
        <AnimatePresence>
            <motion.div key={"registerPage"}
                        initial={{y: 0, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{easeInOut, duration: 0.8}}
                        exit={{y: 0, opacity: 0}}
                        className='form-page-container'>
                <div className='bar'>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className={'back-icon'} onClick={handleHome}/>
                </div>
                <div className='form-container'>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <FontAwesomeIcon icon={faCirclePlus} className={'user-icon'}/>
                        <label htmlFor='email'>Your e-mail:</label>
                        <div className='input-wrapper'>
                            <input {...register('email', {
                                required: 'E-mail is required',
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                validate: (value) => {
                                    if (!value.includes('@')) {
                                        return 'E-mail must include @';
                                    }
                                    return true;
                                },
                            })} type='text' placeholder='E-mail' id='email'/>
                            <FontAwesomeIcon icon={faEnvelope} className={'form-icon'}/>
                        </div>
                        {errors.email && <div className='form-error-msg'>{errors.email.message}</div>}
                        <label htmlFor='password'>Your password:</label>
                        <div className='input-wrapper'>
                            <input {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password should have at least 8 characters.'
                                },
                            })} type='password' placeholder='Password'
                                   id='password'/>
                            <FontAwesomeIcon icon={faLock} className={'form-icon'}/>
                        </div>
                        {errors.password && <div className='form-error-msg'>{errors.password.message}</div>}
                        <button className='form-btn' type='submit'>Create account</button>
                        <p>Already have an account? <span onClick={handleLogin}>Login</span></p>
                        {successModal && (
                            <motion.div key={"registerSuccess"}
                                        initial={{y: 0, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{easeInOut, duration: 0.2}}
                                        exit={{y: 0, opacity: 0}}
                                        className='modal'>
                                <FontAwesomeIcon icon={faFaceSmileBeam} className={'modal-icon success'}/>
                                <p className='modal-info'>Great news! Your account is up and running!</p>
                                <button className='modal-btn success-btn' onClick={handleDashboard} type='button'>Let's go!</button>
                            </motion.div>
                        )}
                        {errorModal && (
                            <motion.div key={"registerError"}
                                        initial={{y: 0, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{easeInOut, duration: 0.2}}
                                        exit={{y: 0, opacity: 0}}
                                        className='modal'
                                        style={{transform: 'translate(0, -50%)'}}>
                                <FontAwesomeIcon icon={faFaceFrown} className={'modal-icon error'}/>
                                <p className='modal-info'>Sorry, this e-mail is already in use.</p>
                                <button className='modal-btn' onClick={handleClose} type='button'>Dismiss</button>
                            </motion.div>
                        )}
                        {regFail && (
                            <motion.div key={"registerFailed"}
                                        initial={{y: 0, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{easeInOut, duration: 0.2}}
                                        exit={{y: 0, opacity: 0}}
                                        className='modal'
                                        style={{transform: 'translate(0, -50%)'}}>
                                <FontAwesomeIcon icon={faFaceFrown} className={'modal-icon error'}/>
                                <p className='modal-info'>An error occurred. Please try again later.</p>
                                <button className='modal-btn' onClick={handleClose} type='button'>Dismiss</button>
                            </motion.div>
                        )}
                    </form>
                </div>
            </motion.div>



        </AnimatePresence>
    )
}
