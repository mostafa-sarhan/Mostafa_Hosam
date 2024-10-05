"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mostafa from "./photo/most.jpg";
import { CiLocationOn } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
// import ThemeToggle from './theme';

export default function Sidebar() {

  // Go to Email
  function toEmail() {
    window.location.href = "mailto:mostafasarhan2030@gmail.com";
  }
  // Go to Whats App
  function whatsApp() {
    window.open("https://wa.me/+201017894631", "_blank");
  }
  // Go to MY VC
  function myCV() {
    window.open("https://drive.google.com/file/d/1l19b2o3Rwfv-3eDb5vZoJ8OTr5aYpbt3", "_blank")
  }
  // Go to linkedin
  function linked() {
    window.open("https://www.linkedin.com/in/mostafa-sarhan-999179237/", "_blank")
  }
  // Go to Git hub
  function git() {
    window.open("https://github.com/mostafa-sarhan?tab=repositories", "_blank")
  }



  // Dark Mode
  const [theme, setTheme] = useState("Dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to light theme if no preference is saved
      document.documentElement.classList.add('light');
    }
  }, []);


  function darkMode(){

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme); // Remove current theme class
    document.documentElement.classList.add(newTheme); // Add new theme class
    localStorage.setItem('theme', newTheme); // Save preference
  }



  return (
    <>
      <div className='text-center '>
        <Image src={mostafa} alt="Mostafa Sarhan Profile Picture" width={170} height={170} className='rounded-full mx-auto my-4' />
        <h3 className='font-bold text-2xl py-2'>
          <span className='specific_color'>Mostafa </span>
          Sarhan
        </h3>
        <p className='back-gray rounded-lg p-2 text-white my-2 mx-2 font-bold'>Front-End Developer</p>
        <p className='back-gray rounded-lg p-2 text-white my-2 mx-2 cursor-pointer font-bold flex items-center justify-center' onClick={myCV} >
          <span className='pe-1'>
            <IoMdDownload></IoMdDownload>
          </span>
          Download Resume</p>

        {/* Social Media Icon */}
        <div className="social">
          <ul className='py-2'>
            <li className='flex justify-around items-center text-2xl specific_color cursor-pointer '>
              <span className='hover:text-black'><FaYoutube /></span>
              <span className='hover:text-black' onClick={linked}><FaLinkedin /></span>
              <span className='hover:text-black' onClick={git}><FaGithub /></span>
            </li>
          </ul>
        </div>

        {/* Start Location */}
        <div className='py-2 my-4 back-gray'>
          <div className='flex items-center justify-center gap-2'>
            <CiLocationOn />
            <p className='py-2 font-bold'>Cairo Egypt</p>
          </div>
          <p className='py-2 cursor-pointer lg:text-[14px] font-bold' onClick={toEmail} >mostafasarhan2030@gmail.com</p>
          <p className='py-2 cursor-pointer font-bold' onClick={whatsApp}>+201017894631</p>
        </div>

        {/* Email Me */}
        <div className='py-2 text-center flex flex-col items-center justify-center'>
          <p className='my-2 py-2 w-8/12 text-white font-bold mx-2 clr rounded-md cursor-pointer' onClick={toEmail}>Email Me</p>
          <p className='my-2 py-2 w-8/12 text-white font-bold mx-2 clr rounded-md cursor-pointer' onClick={darkMode}>
            {theme} UI</p>
        </div>
      </div>
    </>
  );
}
