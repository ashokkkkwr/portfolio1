/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

export default function Footer() {
  const firstName: string = "Ashok"
  const lastName : string="katwal"
  console.log(firstName,lastName)
  const names: string[]=[]
  const req:readonly string[]=['asgok']
  const names23 : string[]=["sdf"]
  const jvayeni :readonly string[]=["mfds"]
  

  return (
    <>
    <div className='mt-32 p-24 bg-black rounded-t-full'>
    <p className='text-white  flex justify-center mr-0 text-3xl font-bold'>LOGO</p>
    <div className='flex justify-center  p-0 mt-10'>
    <p className='text-white mr-14 hover:text-orange-500 transition duration-500 ease-in-out cursor-pointer'>Github</p>
    <p className='text-white hover:text-orange-500 transition duration-500 ease-in-out cursor-pointer'>LinkedIn</p>
    <p className='text-white hover:text-orange-500 ml-10 transition duration-500 ease-in-out cursor-pointer'>FaceBook</p>
    </div>
    <div>
        <p className='text-white flex justify-center mt-10 text-xs'>@ 2024 Ashok Katwal -VAT 0276420146 -Contact</p>
    </div>
    </div>
    </>
   
  )
} 
