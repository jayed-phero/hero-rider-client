import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthProvider = createContext()
const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [open, setOpenn] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [oopen, setOopen] = useState(false)

    const [user, setUser] = useState(" ")
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logout = () => {
        setLoading(true)
        localStorage.removeItem('cpToken')
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        open,
        createUser,
        setOpenn,
        isOpen,
        setOpen,
        user,
        updateUserProfile,
        loading,
        logout,
        signInUser,
        oopen,
        setOopen,
    }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                 {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;