import Image from 'next/image'
import {auth} from '@/firebase/db'
import Navbar from '@/components/nav-bar/Navbar';

export default function Home() {

  return (
    <div>
      <Navbar/>
    </div>
  )
}
