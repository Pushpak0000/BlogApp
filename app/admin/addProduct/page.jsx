"use client";
import { assests } from "@/Assests/assests";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author: "Vijay Bhaskar",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("image", image);

    const response = await axios.post("/api/blogs", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Technology",
        author: "Vijay Bhaskar",
      });
    } else {
      toast.error("Error");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Blog Image</p>
        <label htmlFor="image" className="inline-block">
          <Image
            className="mt-4  cursor-pointer"
            src={!image ? assests.upload : URL.createObjectURL(image)}
            width={100}
            height={70}
            alt=""
            priority
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black bg-[#f1eee5] rounded-md"
          type="text"
          placeholder="Type Here"
          required
        />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black bg-[#f1eee5] rounded-md"
          type="text"
          placeholder="Write content here"
          row={7}
          required
        />

        <p className="text-xl mt-4">Blog Caregory</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border-2 text-gray-500 bg-[#f1eee5] border-black rounded-md"
        >
          <option value="Daily Blog">Daily Blog</option>
          <option value="Weekly Blog">Weekly Blog</option>
          <option value="Finance">Finance</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-orange-400 hover:shadow-[-5px_5px_0px_#000000]"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Page;
