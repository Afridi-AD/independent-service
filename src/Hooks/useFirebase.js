import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react"
import app from "../firebase.init";


const auth = getAuth(app);
// const gProvider = GoogleAuthProvider();
const useFirebase =()=>{

    const [user,setUser] =useState({});
   


    // const signInWithGoogle =()=>{
    //     signInWithPopup(auth,gProvider)
    //     .then(result =>{
    //        const user = result.user; 
    //        setUser(user);
    //     })
    // }

    // return[user,setUser];
    return{
        user, 
        // signInWithGoogle
    }
}

export default useFirebase;