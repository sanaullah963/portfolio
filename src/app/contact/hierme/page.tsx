import Link from 'next/link';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
function page() {
  return (
    <main className="w-full h-screen flex justify-center items-center ">
      <div className="border border-green-400 rounded-lg px-5 py-10  flex flex-col items-center">
        <span className='text-3xl text-green-400'><FaCheckCircle/></span>
        <span>Your messag successfully send</span>
        <Link className='underline text-green-400' href={'/contact'}>Back</Link>
      </div>
    </main>
  )
}

export default page