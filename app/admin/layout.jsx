import { assests } from "@/Assests/assests";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}){
  return (
    <>
    <div className='flex'>
      <ToastContainer theme="dark"/>
        <Sidebar/>
        <div className='flex flex-col w-full'>
              <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-b-4 border-black  '>
                <h3 className='font-medium'>Admin Panel</h3>
                <Image src={assests.logo3} width={40}  alt="" priority className='rounded-full h-[40px] ' />
              </div>
              {children}
        </div>
    </div>
    <Footer/>
     
    </>
  )
}