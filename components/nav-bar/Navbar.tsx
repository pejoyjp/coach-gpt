"use client"
import React from 'react'

import Image from 'next/image'





import Drawer from '../drawer/Drawer'
import UserMenu from '../user-menu/UserMenu'

type Props = {}

const Navbar = (props: Props) => {
  
  return (
    <div className='flex h-14 border-b justify-around text-neutral-600'>
         <div className='center-box gap-4'>
            <Image priority={true} src={'/logo/logo.png'} height={40} width={60} alt='logo' className='h-auto'/>
            <span className='text-xl '>
                CoachGPT
            </span>
          </div>

        <div className='center-box gap-4'>
            <div className='hidden md:block'>
              <UserMenu isMobile={false}/>
            </div>

            <div className='md:hidden'>
              <Drawer/>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar