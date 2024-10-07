import React,{useState,useEffect} from 'react'
import BlogItems from './BlogItems'
import axios from 'axios';

function BlogList() {

  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blogs');
    setBlog(response.data.blogs);
    
  }

  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
      {blog.map((item, index)=>{
       return <BlogItems key={index} image={item.image} id={item._id} category={item.category} title={item.title} description={item.description}  />
      })}
    </div>
  )
}

export default BlogList
