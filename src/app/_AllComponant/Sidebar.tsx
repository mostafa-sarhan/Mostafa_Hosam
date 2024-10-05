import Image from 'next/image'
import React from 'react'
import image from "../../../Mostafa.jpeg"


export default function Sidebar() {
  return (
<>
    <div>
      <Image src={image} alt="" style={{width:"150px",height:"150px"}} className='rounded-full' />
      <h3>Mostaf_Sarhan</h3>

    </div>
</>
  )
}
