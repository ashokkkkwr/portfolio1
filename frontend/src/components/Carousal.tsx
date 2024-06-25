import React from 'react'

export default function Carousal() {
  return (
    <div>
     <div className='flex justify-between mt-20 pl-32 pr-32 pt-36'>
    <div className='mt-16'>
      <h1 className='text-7xl'>Software Engineer</h1>
      <p className="pt-10">A proefficient full stack developer.</p>
      <p className='pt-5 '>Crafting digital experiences one line of code at a time</p>
      <div className="flex   mt-10">
      <input
        type="text"
        placeholder="Search projects"
        className="px-28 py-1 border border-black-500 rounded-2xl"
      />
      <button className="px-12 py-3 bg-black text-white rounded-lg ml-2 hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
      Search
      </button>
    </div>
      </div>
     <div>
      <img className='h-96 rounded-xl' src='https://www.springboard.com/blog/wp-content/uploads/2023/09/what-exactly-does-a-programmer-do.jpeg'/>
     </div>
     </div>
    </div>
  )
}
