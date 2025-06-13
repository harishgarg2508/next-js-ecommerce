'use client'
import { useAppDispatch } from '@/app/lib/hooks';
import {setUser } from '@/app/lib/store/features/AuthSlice';
import { auth } from '@/config/firebase';
import { Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useRouter } from 'next/navigation';

function AuthButton() {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const provider = new GoogleAuthProvider();

    const handleLogin = async () => {
        try {
       const result = await signInWithPopup(auth, provider);
        const userData = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        dispatch(setUser(userData))
        } catch (error) {
            console.log(error);
        }
         router.push('/')
        

    }
  return (
    <Button variant='contained' color='primary' onClick={handleLogin}>Login with google</Button>
  )
}

export default AuthButton