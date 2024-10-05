import React from 'react'
import Details from '../Details';


export default function page() {



  return (
    <>
    <div className='mt-10 px-4 max-h-[550px]  overflow-y-scroll'>
      {/* <h2 className='pb-4'>Resume Page</h2> */}
      <div className='grid grid-cols-12 gap-4 '>
        <Details/>
      </div>
    </div>
    </>
  )
}
