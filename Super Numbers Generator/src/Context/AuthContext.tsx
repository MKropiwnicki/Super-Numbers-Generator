// import {createContext, useContext, useEffect, useState} from "react";
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged
// } from 'firebase/auth';
// import {auth} from "../firebase";

// const UserContext = createContext();
//
// export const AuthContextProvider = ({children}) => {
//
//     const [user, setUser] = useState({});
//     const [isLogged, setIsLogged] = useState(false);
//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             // console.log(currentUser)
//             setUser(currentUser)
//         })
//         return() => {
//             unsubscribe()
//         }
//     }, [])
//
//     const login = (email, password) => {
//         setIsLogged(!isLogged);
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//
//     const logout = () => {
//         setIsLogged(!isLogged);
//         return signOut(auth)
//     }
//
//     return (
//         <UserContext.Provider value={{createUser, user, login, logout}}>
//             {children}
//         </UserContext.Provider>
//     )
// }
//
// export const UserAuth = () => {
//     return useContext(UserContext)
// }

// import React, { createContext, FC, useContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged, UserCredential } from 'firebase/auth';
// import firebase, { auth } from "../firebase.ts";
//
// interface IUser {
//     email: string | null | undefined,
//     password?: string | null | undefined
// }
//
// interface IAuthContext {
//     createUser: (email: string, password: string) => Promise<UserCredential>,
//     user: IUser | null,
//     login: (email: string, password: string) => Promise<void>,
//     logout: () => Promise<void>,
//     isLogged: boolean
// }
//
// interface AuthContextProviderProps {
//     children: React.ReactNode;
// }
//
// const UserContext = createContext<IAuthContext | undefined>(undefined);

// export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
//
//     const [user, setUser] = useState<User | null>(null);
//     const [isLogged, setIsLogged] = useState(false);
//
//     const createUser = (email: string, password: string) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });
//         return () => {
//             unsubscribe();
//         };
//     }, []);
//
//     const login = async (email: string, password: string) => {
//         await signInWithEmailAndPassword(auth, email, password);
//         setIsLogged(true);
//     }
//
//     const logout = async () => {
//         await signOut(auth);
//         setIsLogged(false);
//     }
//
//     const authContext: IAuthContext = {
//         createUser,
//         user,
//         login,
//         logout,
//         isLogged
//     };
//
//     return (
//         <UserContext.Provider value={authContext}>
//             {children}
//         </UserContext.Provider>
//     )
// }
//
// // export const UserAuth = () => {
// //     return useContext(UserContext);
// //
// // }
//
// export const UserAuth = () => {
//     const context = useContext(UserContext);
//     return context ? context.user : null;
// }

