import React from 'react'
import Container from './Container'
import Box from './Box'
import BoxHeadding from './BoxHeadding'
import { experianceArr } from '@/constant/data'

function Experience() {
  return (
    <main>
      <Container>
        <Box className={'bg-lightBackground'}>
          <BoxHeadding headding={'my experience'}/>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-x-5'>
            {
              experianceArr.map((i)=>(
                <div key={i.id} className="bg-darkBackground shadow-xl hover:shadow-slate-600 duration-500  py-4 px-3 w-full max-w-[350px] mx-auto">
              <h2 className='capitalize font-semibold text-2xl text-lightBackground'>{i.titel}</h2>
              <p className="text-gray-400 ">{i.descripetion}</p>
            </div>
              ))
            }
            
          </div>
        </Box>
      </Container>
    </main>
  )
}

export default Experience