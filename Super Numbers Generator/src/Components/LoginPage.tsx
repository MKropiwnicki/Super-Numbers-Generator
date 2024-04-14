import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleUser,
    faEnvelope,
    faFaceFrown,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence,easeInOut } from "framer-motion"
import { useNavigate } from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import { UserAuth } from "../Context/AuthContext2.tsx";
import React, { useState } from "react";

type LoginPageProps = {
    visibilitySwitch: React.Dispatch<boolean>,
    logSwitch: React.Dispatch<boolean>
}

export const LoginPage = ({visibilitySwitch, logSwitch}: LoginPageProps) => {

    const [error, setError] = useState<string>('')
    const [errorModal, setErrorModal] = useState<boolean>(false);

    type LoginFormFields = {
        email: string,
        password: string;
    }

    const navigate = useNavigate();
    const authContext = UserAuth();
    const handleHome = () => {
        navigate('/');
        visibilitySwitch(true);
    }

    const handleRegister = () => {
        navigate('/register')
    }


    // const handleDashboard = () => {
    //     navigate('/dashboard');
    //     logSwitch(!logStatus);
    // }

    const handleClose = () => {
        setErrorModal(false);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<LoginFormFields>();

    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        if (!authContext) {
            console.error("login is undefined");
            return;
        } else {
            console.log(authContext);
        }

        try {
            await authContext.login(data.email, data.password);
            console.log(authContext);
            navigate('/dashboard')
            logSwitch(true);
            reset();
        } catch (e) {
            setError((e as Error).message)
            console.log(error)
            setErrorModal(true);
            // isLogOk = false;
            reset()
        }
    }

    return(
        <AnimatePresence>
            <motion.div key={"loginPage"}
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
                        <FontAwesomeIcon icon={faCircleUser} className={'user-icon'}/>
                        <label htmlFor='email'>Your e-mail:</label>
                        <div className='input-wrapper'>
                            <input {...register('email', {
                                required: 'E-mail is required',
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                validate: (value) => {
                                    if(!value.includes('@')) {
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
                                    message: 'Password is to short.'
                                },
                            })} type='password' placeholder='Password'
                                   id='password'/>
                            <FontAwesomeIcon icon={faLock} className={'form-icon'}/>
                        </div>
                        {errors.password && <div className='form-error-msg'>{errors.password.message}</div>}
                        <button className='form-btn' type='submit'>Login</button>
                        <p>Don&apos;t have an account? <span onClick={handleRegister}>Register</span></p>
                        {errorModal && (
                            <motion.div key={"loginError"}
                                        initial={{y: 0, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{easeInOut, duration: 0.2}}
                                        exit={{y: 0, opacity: 0}}
                                        className='modal'
                                        style={{transform: 'translate(0, -50%)'}}>
                                <FontAwesomeIcon icon={faFaceFrown} className={'modal-icon error'}/>
                                <p className='modal-info'>Incorrect e-mail or password.</p>
                                <button className='modal-btn' onClick={handleClose}>Dismiss</button>
                            </motion.div>
                        )}
                    </form>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
