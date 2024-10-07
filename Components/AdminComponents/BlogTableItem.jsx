import { assests } from "@/Assests/assests";
import Image from "next/image";
import React from "react";

function BlogTableItem({ title, author, date, deleteBlog, mongoId}) {

  const BlogDate = new Date(date);

  return (
    <tr className="bg-[#efe2b7] border-b-2 border-blue-400">
      <th
        scope='row'
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-purple-600 whitespace-nowrap"
      >
        <Image width={40} height={40} src={assests.logo3} priority alt='' className='rounded-full h-[40px]' />
        <p>{author?author:'No author'}</p>
      </th>
      <td className="text-purple-600 px-6 py-4">{title ? title : "no title"}</td>
      <td className=" text-purple-600 px-6 py-4">{BlogDate.toDateString()}</td>
      <td onClick={()=>deleteBlog(mongoId)} className="text-purple-600 px-6 py-4 cursor-pointer">X</td>
    </tr>
  );
}

export default BlogTableItem;
