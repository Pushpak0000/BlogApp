import React from "react";
import Image from "next/image";
import { assests } from "@/Assests/assests";
function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div href="/" className="flex justify-between items-center">
        <div className="flex items-end">
          <Image
            src={assests.logo3}
            width={100}
            alt=""
            priority
            className="w-[100px] h-[100px] sm:w-auto rounded-lg border-2 border-[#415d43]"
          />
          <div className='ml-4'>
            <p className='font-semibold text-xl text-blue-500'>Pushpak Jha</p>
            <p className='font-semibold'>Finance, Business, and Sport</p>
          </div>
        </div>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-orange-300 shadow-[-5px_5px_0px_#03045e] w-20 h-20 rounded-full">
          Blogs
        </button>
      </div>
      <div className="border border-b border-black mt-3"></div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium text-blue-900">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          doloremque. Consequatur voluptatum odit quidem cumque neque molestias
          modi nihil ducimus?
        </p>
      </div>
    </div>
  );
}

export default Header;
