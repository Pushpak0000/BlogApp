import { assests } from "@/Assests/assests";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#caf0f8]">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Link href='/'>
        <Image src={assests.logo3} width={100} priority alt="" className='h-[100px] w-[80px] rounded-lg border-2 border-[#415d43]' />
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href='/admin/addProduct' className="cursor-pointer flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white   hover:shadow-[-5px_5px_0px_#03045e]">
            <button>Add Blogs</button>
          </Link>
          <Link href='/admin/blogList' className="cursor-pointer mt-3 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#03045e]">
            <button>Blog List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
