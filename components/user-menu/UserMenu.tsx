import React, { useEffect } from 'react'
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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation';

type Props = {
    isMobile:boolean
}
type MenuItem = 'profile' | 'logout';

const UserMenu = ({isMobile}: Props) => {
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

    if(isMobile){
        return (
            <div>
                <div className='flex items-center gap-4'>
                    <Avatar>
                        <AvatarImage src={user?.photoURL as string} alt="userAvatar" />
                        <AvatarFallback>{user?.displayName}</AvatarFallback>
                    </Avatar>
                    <span>
                        {user?.displayName}
                    </span> 
              
                    
                </div>
                <Separator className='mt-2'/>
                <div className='center-box flex-col gap-3 pt-4'>
                    <div    className=' hover:underline hover:cursor-pointer'
                            onClick={()=>handleMenuItem('profile')}>
                        Profile
                    </div>

                    <div    className=' hover:underline hover:cursor-pointer'
                            onClick={()=>handleMenuItem('logout')}>
                        Logout
                    </div>

                    
                </div>

               
               
                
            </div>
        )
        
    }else{
        return (
            <DropdownMenu>
                <DropdownMenuTrigger className='center-box gap-2' >
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
        )
    }
    
}

export default UserMenu