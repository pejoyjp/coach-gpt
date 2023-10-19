"use client"
import React, { useEffect } from 'react'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {signOut } from 'firebase/auth';
import { auth } from '@/firebase/db'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Props = {}
type MenuItem = 'profile' | 'logout';

const Navbar = (props: Props) => {
  const router = useRouter()
  const {user,loading} = useUser()
 
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [loading, user, router]); 

  
  const menuItemHandlers: {
    [key in MenuItem]: () => void;
   } = {
    profile: () => {
      
    },
    logout: async () => {
      await signOut(auth)
    }
  };

  const handleMenuItem = (menuItem: MenuItem) => {
    const handler = menuItemHandlers[menuItem];
    handler();
  };

  
  return (
    <div className='flex h-14 border-b justify-around text-neutral-700'>
         <div className='center-box gap-4'>
            <Image priority={true} src={'/logo/logo.png'} height={40} width={60} alt='logo' className='h-auto'/>
            <span className='text-xl '>
                CoachGPT
            </span>
          </div>

        <DropdownMenu>
          <DropdownMenuTrigger className='center-box gap-2'>
            <Avatar>
              <AvatarImage src={user?.photoURL as string} alt="userAvatar" />
              <AvatarFallback>{user?.displayName}</AvatarFallback>
            </Avatar>
            <span>
              {user?.displayName}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>handleMenuItem('profile')}>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>handleMenuItem('logout')}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

       

    </div>
  )
}

export default Navbar