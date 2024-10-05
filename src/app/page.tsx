import React from 'react'
import Sidebar from './_AllComponant/sidebar'
import Left from './_AllComponant/Left'

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-2">
      <div className="sidebar lg:col-span-3 col-span-12 bg-white">
        <Sidebar/>
      </div>
      <div className="left lg:col-span-9 col-span-12 bg-white">
        <Left/>
      </div>
    </div>
    </>
  )
}
