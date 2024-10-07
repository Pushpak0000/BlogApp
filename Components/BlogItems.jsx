import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogItems({image, category, title, description, id}) {
  return (
    <div className='max-w-[330px] sm:max-w-[300px]  border bg-indigo-100 border-black hover:scale-105 transition duration-300'>
      <Link href={`/blog/${id}`}>
      <Image src={image} alt='' width={400} height={400} priority className='border-b border-black' />
      </Link>
      <p className='ml-5 mt-5 px-3 inline-block bg-slate-500 py-1  text-black text-sm rounded-lg '>{category}</p>
      <div className='p-5'>
          <h5 className='mb-2 text-lg font-medium tracking-tight text-orange-600'>{title}</h5>
          <p className='mb-3 text-sm tracking-tight text-orange-800'>{description.lenght <= 100 ? description: `${description.slice(0,100)} ...`}</p>
          <Link href={`/blog/${id}`} className='inline-flex items-center py-2 font-semibold text-center cursor-pointer hover:text-blue-500 text-sm'>
              Read more
          </Link>
      </div>
    </div>
  )
}

export default BlogItems

