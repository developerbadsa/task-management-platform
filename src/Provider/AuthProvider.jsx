import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";


export const userInfoProvider = createContext(null)


const AuthProvider = ({children}) => {
      
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const auth =  getAuth(app)


const userLogin = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
}
const userRegister = (email, password)=>{
      
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)

}

const updateUser = (displayName, PhotoURL)=>{
            return updateProfile(auth.currentUser, {
            displayName:displayName, photoURL: PhotoURL
          })
}

useEffect(() => {

      const unSubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
      });
      return unSubscribe
  }, [])

//Login with facebook
const loginWithFB = ()=>{
      setLoading(true)
      const FBProvider = new FacebookAuthProvider();
      return signInWithPopup(auth, FBProvider)
}

//Login with Google 
const loginWithGoogle = ()=>{
      setLoading(true)
      const GoogleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, GoogleProvider)
}


const userLogout = ()=>{
      setLoading(true)
      return 'reg'
}

console.log(user)

      const userData = {
            user, userRegister,updateUser, userLogin, userLogout,loginWithFB,loginWithGoogle, loading
      }
      return (
            <userInfoProvider.Provider value={userData}>
                  { children }
            </userInfoProvider.Provider>
      );
};

export default AuthProvider;