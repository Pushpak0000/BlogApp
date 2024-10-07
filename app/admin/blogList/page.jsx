"use client";
import BlogTableItem from "@/Components/AdminComponents/BlogTableItem";
import axios from "axios";
import React,{useState, useEffect} from "react";
import { toast } from "react-toastify";

function Page() {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blogs');
    setBlogs(response.data.blogs)
  }

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete('/api/blogs', {
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs();
  },[])

  return (
    <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
      <h1 className='font-semibold' >All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border-2 border-black scrollbar-hide">
        <table className="w-full text-sm text-gray-400">
          <thead className="text-xs text-gray-700 text-left uppercase bg-[#e8e2cf] border-b-2 border-black">
            <tr  >
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index) => {
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog} />
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
