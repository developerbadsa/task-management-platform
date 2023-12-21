import React, { createContext, useState } from 'react';
import app from './Firebase.config';
import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";


export const userInfoProvider = createContext(null)


const AuthProvider = ({children}) => {
      
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const auth =  getAuth(app)


const userLogin = ()=>{
      return 'login'
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
const loginWithFB = ()=>{
      const FBprovider = new FacebookAuthProvider();
      signInWithPopup(auth, FBprovider)
}
const userLogout = ()=>{
      return 'reg'
}



      const userData = {
            user, userRegister, userLogin, userLogout,loginWithFB, loading
      }
      return (
            <userInfoProvider.Provider value={userData}>
                  { children }
            </userInfoProvider.Provider>
      );
};

export default AuthProvider;