"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {

    const [activeItem, setActiveItem] = useState("About");

    return (
        <>
            <div className='py-3 px-6 text-xl'>
                <ul className='flex justify-between cursor-pointer items-center '>
                    <div className=' border-b-4  border-green-600 font-bold'>
                        <li>
                            <Link href="">{activeItem}</Link>
                        </li>
                    </div>
                    <div className='flex items-center justify-between'>
                        <li className='me-3' onClick={() => { setActiveItem("About") }}>
                            <Link href="/">About</Link>
                        </li>
                        <li className='me-3' onClick={() => { setActiveItem("Projects") }}>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li onClick={() => { setActiveItem("Resume") }}>
                            <Link href="/resume">Resume</Link>
                        </li>

                    </div>
                </ul>
            </div>
        </>
    );
}
