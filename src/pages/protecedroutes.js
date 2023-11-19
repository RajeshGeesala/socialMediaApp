import React from 'react'
import { useState ,useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import PageLoading from './pageloading';

const ProtectedRoutes = ({children}) => {
  
  const [authUser ,setAuthUser] = useState(null)
  //useEffect for data setting
  useEffect(()=>{

  const listen = onAuthStateChanged(auth , (user) => {
      if (user) {
          setAuthUser(user) 
          return <PageLoading></PageLoading>
      }else {
          setAuthUser(null)
      }
  })

  },[])  
   
  return( children) ;
}

export default ProtectedRoutes ;