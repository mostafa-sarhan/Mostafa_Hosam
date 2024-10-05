import React from 'react';

import { MdOutlineDesktopWindows } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className='pt-3'>
        <h6 className='mt-8 me-4 px-5 leading-relaxed'>
          I am Mostafa Sarhan, a Front-End Developer with over 2 years of experience specializing in React.js and Next.js. Throughout my career, I have worked on a variety of projects, including an E-commerce app, a Social Media app, and a Weather app. My focus is on building dynamic, responsive, and user-friendly web applications. With a strong foundation in JavaScript, I continually strive to enhance my skills and stay updated with the latest industry trends.
        </h6>
        <div className='mt-6 mb-0 back-gray pt-11 px-5'>
          <h5 className='text-gray-700 text-xl font-bold'>What I&apos;m Doing</h5>
          <div className='grid grid-cols-12 gap-8 py-6'>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <MdOutlineDesktopWindows className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>Front-End Developer</h3>
                  <p className='me-4'>I can build dynamic, scalable, and responsive single-page applications (SPA) using HTML, CSS, JavaScript, and React.js.</p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <FcSmartphoneTablet className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>Responsive Design</h3>
                  <p className='me-4'>I create mobile-first designs with Tailwind CSS and Bootstrap, ensuring compatibility across devices.</p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <TbPlugConnected className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>API Development</h3>
                  <p className='me-4'>I create APIs to support various applications, ensuring scalability and performance.</p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <FaLaptopCode className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>Competitive Coder</h3>
                  <p className='me-4'>I stay updated on industry trends, continuously enhancing my skills to deliver innovative solutions that impress clients.</p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <IoLogoFigma className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>UI/UX Designer</h3>
                  <p className='me-4'>I collaborate with UI/UX designers to create engaging, user-friendly interfaces that enhance overall experience.</p>
                </div>
              </div>
            </div>
            <div className='lg:col-span-6 col-span-12 back-white py-2 rounded-xl'>
              <div className='flex justify-center items-center p-2 ms-2'>
                <div className="icon">
                  <TbDeviceMobileCode className='text-3xl me-3 specific_color' />
                </div>
                <div>
                  <h3 className='font-bold'>Project Experience</h3>
                  <p className='me-4'>I&apos;ve developed E-commerce, Social Media, and Weather apps, enhancing functionality and user engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
