import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";


const Sidebar = () => {
    const [extend,setExtended]=useState(false)
  return (
    <div className='min-h-screen inline-flex flex-col  justify-between bg-[#e4e7eb]
     py-[25px] px-[15px]'>
        <div>  
        <IoMenu onClick={()=>setExtended(!extend)} className='text-2xl block cursor-pointer' />
        <div className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full'>
        <FaPlus className='text-2xl'/>
          {extend && <p>New Chat</p>}
        </div>
        {extend &&( <div className='flex flex-col'>
          <p  className='mt-7 mb-5'>Recent</p>
          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300'>
          <FaRegMessage className="text-2xl" />

           <p>What is Java?</p>
          </div>
         </div>)}
        </div>

        <div className='flex flex-col '>
          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer '>
          <FaQuestion className='text-2xl' />
          {extend && <p>Help</p>}
          </div>
          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer '>
          <MdHistory className="text-2xl" />
            {extend &&<p>Activity</p>}
          </div>
          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer '>
          <IoIosSettings  className='text-2xl'/>
           {extend && <p>Settings</p>}
          </div>
        </div>
     </div>
  )
}

export default Sidebar