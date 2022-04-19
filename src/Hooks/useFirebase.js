import { useEffect, useState } from "react"


const useFirebase =()=>{

    const [user,setUser] =useState({});
    useEffect(()=>{

    },[])


    const signInwithgoogle =()=>{
        console.log('suuddd')
    }

    // return[user,setUser];
    return{user, signInwithgoogle}
}

export default useFirebase;