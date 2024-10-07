"use client";
import { assests } from "@/Assests/assests";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blogs", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  },[]);

  return data ? (
    <>
      <div className="bg-[#e0e1e1] py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assests.logo3}
              width={100}
              height={100}
              alt=""
              priority
              className="w-[100px] h-[100px] sm:w-auto rounded-lg border-2 border-[#415d43] "
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black bg-orange-300 shadow-[-5px_5px_0px_#03045e] w-20 h-20 rounded-full">
            Blogs
          </button>
        </div>
        <div className="border border-b border-black mt-3"></div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max:-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="h-[100px]  mx-auto mt-6 border border-[#415d43] rounded-full"
            src={assests.logo3}
            width={100}
            height={100}
            alt=""
            priority
          />
          <p className="text-blue-500 mt-1 pb-2 text-lg max-w-[740px] mx-auto font-semibold ">
            {data.author}
          </p>
        </div>
      </div>
      <div className="bg-[#cecfcf] py-5 px-5 md:px-12 lg:px-28">
        <div className="mx-5 max-w-[500px] md:mx-auto mt-[-100px] mb-10">
          <Image
            className="border-4 border-[#415d43]  h-[400px] rounded-lg"
            src={data.image}
            width={500}
            height={500}
            alt=""
            priority
          />
          <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
          <p className='font-semibold' >{data.description}</p>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
}

export default Page;
