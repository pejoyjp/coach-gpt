"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '@/firebase/db'
import { useRouter } from 'next/navigation'

import {AiFillGoogleCircle,AiOutlineGithub} from 'react-icons/ai'
import useUser from '@/hooks/useUser';
import toast from 'react-hot-toast';


type Props = {}

const Auth = (props: Props) => {
    const route = useRouter()
    const {user,loading} = useUser()

    useEffect(()=>{
        if(user){
            route.push('/')
        }
    },[user])

    const handleAuthGoole = async()=>{
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth,provider)
            route.push('/')
            

        }catch(e:any){
            toast.error(e.message)
        }
       
    }
    const handleAuthGithub = async()=>{
        const provider = new GithubAuthProvider();
        const res = await signInWithPopup(auth,provider)
        console.log(res);
    }

  return (
    <div className='center-box h-screen text-neutral-600'>
        <div className='md:basis-1/3 center-box border-r h-full flex-col gap-10 w-full'>
            <div className='center-box flex-col'>
                <div className='center-box gap-4'>
                    <Image src={'/logo/logo.png'} height={40} width={80} alt='logo'/>
                    <span className='text-3xl font-thin'>
                        CoachGPT
                    </span>
                   
                </div>

                <span className='text-sm font-thin text-right w-full'>
                    Digital Coach, Real Results.
                </span>
            </div>

            <div className='center-box flex-col gap-4'>
                <button onClick={handleAuthGoole} className='center-box gap-4 border px-6 py-2 '>
                    <AiFillGoogleCircle size={28}/>
                    <span>
                        Continue with Google
                    </span>
                </button>

                <button onClick={handleAuthGithub} className='center-box gap-4 border px-6 py-2 '>
                    <AiOutlineGithub size={28}/>
                    <span>
                        Continue with Github
                    </span>
                </button>
            </div>
           

        </div>

        <div className='basis-2/3 hidden md:center-box '>
            <Image src={'/bg/auth-bg.png'} height={800} width={800} alt='bg'/>
        </div>
    </div>
  )
}

export default Auth