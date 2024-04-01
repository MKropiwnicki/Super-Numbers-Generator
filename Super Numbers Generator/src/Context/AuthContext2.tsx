import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged, UserCredential } from 'firebase/auth';
import { auth } from "../firebase.ts";



interface IAuthContext {
        createUser: (email: string, password: string) => Promise<UserCredential>,
        user: User | null,
        login: (email: string, password: string) => Promise<void>,
        logout: () => Promise<void>
}

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<IAuthContext | undefined>(undefined);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const logout = async () => {
        await signOut(auth);
    }

    const authContext: IAuthContext = {
        createUser,
        user,
        login,
        logout
    };

    return (
        <UserContext.Provider value={authContext}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);

}
