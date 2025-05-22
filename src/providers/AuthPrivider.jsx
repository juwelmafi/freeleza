import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthPrivider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();


  // Register //
  const registerUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  };


// Login //

const loginUser = (email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}


// Google Login //


const googleLogin = ()=>{
  return signInWithPopup(auth, provider);
}


// Logout //

const logOutUser = ()=>{
  setLoading(true);
  return signOut(auth);
}


// Update User //

const updateUser = (updatedData)=>{
  return updateProfile(auth.currentUser, updatedData);
}


// Forget Pass 


const forgetPass = (email)=>{
  return sendPasswordResetEmail(auth, email);
}




  // Manege State Change //

  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
       setUser(currentUser);
       setLoading(false);
     })
     return ()=>{
         unSubscribe();
     }
   }, [])



  const authData = {
    user,
    setUser,
    registerUser,
    loginUser,
    logOutUser,
    loading,
    setLoading,
    googleLogin,
    updateUser,
    forgetPass,


  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthPrivider;
