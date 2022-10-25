import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const providerLogIn = provider => {
        return signInWithPopup(auth, provider);
    }

    const gitHubLogIn = provider =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Inside auth state change', currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user, providerLogIn, createUser, signIn, gitHubLogIn, logOut }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;