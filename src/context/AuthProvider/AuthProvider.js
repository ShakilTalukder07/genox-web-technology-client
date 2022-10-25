import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

const providerLogIn = provider =>{
    return signInWithPopup( auth, provider);
}

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

    const authInfo = {providerLogIn,createUser, signIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;