import React, { useEffect, useState } from 'react';
import useShowToast from './useShowToast';
import { db } from '../firebase/firebase';
import { query,collection,where,getDocs } from 'firebase/firestore';
import useUserProfile from '../store/userProfileStore';

export default function useGetUserProfileByUsername(username) {

  const [isLoading,setIsLoading]=useState(false);
  const {displayToast} = useShowToast();
  const {userProfile,setUserProfile} = useUserProfile()

  useEffect(()=>{
    const getUserProfile = async ()=>{
        setIsLoading(true);
        try{
         const q = query(collection(db,"users"),where("username","==",username));
         const querySnapShot = await getDocs(q);
         
         if(querySnapShot.empty) return setUserProfile(null);

         let userDoc;
         querySnapShot.forEach((doc)=>{
            userDoc=doc.data();
         })
        setUserProfile(userDoc);
        }catch(error){
          displayToast("Error",error.message,"error")
        }
        finally{
          setIsLoading(false)
        }
    }

    getUserProfile()
  }, [username,displayToast,setUserProfile] )

  return {isLoading,userProfile}
}
