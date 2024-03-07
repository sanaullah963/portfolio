'use client'
import React from 'react'
import Container from './Container'
import Box from './Box'
import BoxHeadding from './BoxHeadding'
import Link from 'next/link'
import { services } from '@/constant/data'
import CardParent from './CardParent'


function Services() {
  return (
    <main>
      <Container>
        <Box className={'bg-lightBackground pb-20'}>
          <BoxHeadding headding={'my services'} className={'mb-10'}/>
          <CardParent >
            {/* item */}
            {
              services.map((i)=>(
                <div key={i.id} className="border-[1px] border-semilightText shadow-inner hover:shadow-slate-600 duration-500 ps-4 pe-1 pt-8 pb-5 rounded-md group">
              <div className="flex justify-center mb-8">
              <p className=' h-14 w-14 flex justify-center items-center text-4xl rounded-full bg-darkBackground text-lightBackground animate-bounce group-hover:animate-none duration-300'>{<i.icon/>}</p>
              </div>
              <BoxHeadding headding={i.titel} className={'text-lg mb-3 lg:text-xl text-darkBackground'}/>
              <p className='mb-5'>{i.detail.length > 300 ? i.detail.slice(0,300)+"...":i.detail}</p>
              <div className="flex justify-center">
              <button className='px-6 py-2 text-xl bg-colorfullText hover:bg-black duration-300  text-lightBackground rounded-md group-hover:animate-pulse'>
                <Link href={i.url}>Details</Link>
              </button>
              </div>
            </div>
              ))
            }
            
          </CardParent>
        </Box>
      </Container>
    </main>
  )
}

export default Services