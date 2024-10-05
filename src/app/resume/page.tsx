import React from 'react'
import { FaCircle } from "react-icons/fa";



export default function page() {
  return (
    <>
      {/* <h2>Resume page</h2>
      <div className='flex flex-col py-2' >
        <div className='w-1/2 h-6 bg-slate-800 rounded-xl'>
        </div>
      </div> */}
      <div className='grid grid-cols-12 gap-x-4 px-6 my-5'>
        <div className='lg:col-span-6 col-span-12 my-5'>
          <h2 className='text-2xl font-bold'>Education</h2>
          <h4 className='text-2xl pt-2'>Computer Science Engineering
            <br />
            Menoufia University Engineering</h4>
          <p className='text-xl py-3'>I am currently pursing B.tech in Computer Science Enginnering From Menoufia University</p>
          <div className='pt-4'>
            <h3 className='text-2xl font-bold'>Language & Framework</h3>
            <div className="pt-3">
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-80 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Java Script</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-60 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>JQUERY</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-52 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-96 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>React</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-80 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Typescript</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-72 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Next JS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-6 col-span-12 my-5'>
          <h2 className='text-2xl font-bold'>Experience</h2>
          <h4 className='text-2xl pt-2'>Internship
            <br />
            Diploma Route Academy</h4>
          <p className='text-xl py-3'>Test suitable of an website for blind and color blind persons using Selenium</p>
          <div className='pt-4'>
            <h3 className='text-2xl font-bold'>Tools & Softwares</h3>
            <div className="pt-3">
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-80 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>HTML/CSS</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-60 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Git/Github</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-52 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>APIs</p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 h-10 back-gray rounded-3xl relative mt-2'>
                <div className='clr_specific w-96 h-full absolute top-0 left-0 rounded-3xl flex items-center '>
                  <div className='flex items-center text-xl text-white'>
                    <FaCircle className='mx-2'/>
                    <p>Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
