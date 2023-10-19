import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {AiOutlineMenu} from 'react-icons/ai'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import UserMenu from '../user-menu/UserMenu'
import { cn } from '@/lib/utils'
type Props = {}

const Drawer = (props: Props) => {
  return (
    <Sheet>
        <SheetTrigger asChild>
        <button>
            <AiOutlineMenu size={25}/>
        </button>
        </SheetTrigger>
        <SheetContent>
        
        <UserMenu isMobile={true}/>
        
      </SheetContent>
    </Sheet>
      
      
  )
}

export default Drawer