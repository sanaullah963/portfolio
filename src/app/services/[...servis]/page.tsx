'use client'
import DinamicPage from '@/components/services/DinamicPage'
import React from 'react'

function page({params}:any) {
  
  return (
    <div>
      <DinamicPage data={params.servis[0]}/>
    </div>
  )
}

export default page