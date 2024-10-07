import { assests } from '@/Assests/assests'
import Image from 'next/image'
import React from 'react'
import { FaFacebook ,FaInstagram, FaTwitterSquare} from "react-icons/fa";

function Footer() {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-slate-900 py-5 items-center'>
      <Image src={assests.logo3} alt='footer logo' width={80}  priority className='w-[80px] h-[100px] rounded-lg border-2 border-[#415d43]' />
      <p className='text-sm text-white'>You can read some intresting Blod with Pushpak</p>
      <div className='flex gap-2'>
          <FaFacebook  className='text-blue-600 cursor-pointer hover:scale-150 transition duration-300'/>
          <FaInstagram  className='text-orange-400 cursor-pointer hover:scale-150 duration-300'/>
          <FaTwitterSquare className='text-blue-600 cursor-pointer hover:scale-150 duration-300'/>
      </div>
    </div>
  )
}

export default Footer
