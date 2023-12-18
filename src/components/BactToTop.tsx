import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

function BactToTop() {
  return (
    // <main className=' absolute bottom-0 right-0'>
      <div className='fixed right-5 bottom-10'>
        <button className='p-3 bg-colorfullText text-darkBackground rounded-md '>
          <Link href={''}><AiOutlineArrowUp/></Link>
        </button>
      </div>
  //  </main>
  )
}

export default BactToTop