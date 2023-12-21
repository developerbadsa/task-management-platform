import React, { createContext, useState } from 'react';
import app from './Firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


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

      // updateProfile(auth.currentUser, {
      //       displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
      //     }).then(() => {
      //       // Profile updated!
      //       // ...
      //     }).catch((error) => {
      //       // An error occurred
      //       // ...
      //     });
}

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



      const userData = {
            user, userRegister, userLogin, userLogout,loginWithFB,loginWithGoogle, loading
      }
      return (
            <userInfoProvider.Provider value={userData}>
                  { children }
            </userInfoProvider.Provider>
      );
};

export default AuthProvider;