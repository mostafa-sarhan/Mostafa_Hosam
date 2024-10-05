"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

// Import images from the public folder
const projects = [
    { src: "/photo/Weather_app.png", title: 'Weather App', desc: "A JS-based weather app showing temperature data for the day before yesterday, yesterday, and tomorrow using real-time API.", tools: ["Javascript", "Api", "Material UI"], Github_src: "https://github.com/mostafa-sarhan/weatherApp", demo: "https://mostafa-sarhan.github.io/weatherApp/" },
    { src: "/photo/Resturant_website.png", title: 'Restaurant Website', desc: "A JS-based restaurant website showcasing menu items, reservations, and reviews, with real-time updates and a responsive design.", tools: ["HTML", "CSS", "JS"], Github_src: "https://github.com/mostafa-sarhan/Mealify", demo: "https://mostafa-sarhan.github.io/Mealify/" },
    { src: "/photo/Movie_app.png", title: 'Movie App', desc: "A dynamic JS-based movie app displaying movie posters with titles, allowing users to search for films, view details, and interact with a sleek, responsive grid of the latest releases.", tools: ["Javascript", "Jquery", "Bootstrap"], Github_src: "https://github.com/mostafa-sarhan/MovieApp", demo: "https://mostafa-sarhan.github.io/MovieApp/" },
    { src: "/photo/watch_website.png", title: 'Watch Website', desc: "A JS-based watch website displaying watch collections with images, details, and a search feature for easy browsing.", tools: ["HTML", "CSS", "Javascript"], Github_src: "https://github.com/mostafa-sarhan/_Watch", demo: "https://mostafa-sarhan.github.io/_Watch/" },
    { src: "/photo/CRUD_system.png", title: 'CRUD System', desc: "A CRUD system allowing users to add, update, and delete products with details like name, price, category, and description displayed in a responsive table.", tools: ["HTML", "CSS", "Javascript"], Github_src: "https://github.com/mostafa-sarhan/CURD-System", demo: "https://mostafa-sarhan.github.io/CURD-System/" },
    { src: "/photo/Portfolio_website.png", title: 'Portfolio Website', desc: "A JS-based portfolio website showcasing projects, skills, and experience with a clean, responsive design for easy navigation and interaction.", tools: ["HTML", "CSS"], Github_src: "https://github.com/mostafa-sarhan/Devolio-Profile", demo: "https://mostafa-sarhan.github.io/Devolio-Profile/" },
    { src: "/photo/Coffee_website.png", title: 'Coffee Website', desc: "A JS-based coffee website displaying various coffee products, descriptions, and a search feature, with a user-friendly and responsive design.", tools: ["HTML", "CSS"], Github_src: "https://github.com/codedeveloper2030/coffe-Shop", demo: "https://codedeveloper2030.github.io/coffe-Shop/" },
    { src: "/photo/smart_watch_website.png", title: 'Smart Watch Website', desc: "A JS-based smart watch website showcasing a range of smart watches, complete with product details, images, and an intuitive search feature for easy browsing.", tools: ["HTML", "CSS"], Github_src: "https://github.com/codedeveloper2030/Market_Watch", demo: "https://codedeveloper2030.github.io/Market_Watch/" },
    { src: "/photo/Portfolio.png", title: 'Portfolio', desc: "A portfolio website showcasing a designer's skills and projects with an engaging layout and easy navigation.", tools: ["HTML", "CSS"], Github_src: "https://github.com/codedeveloper2030/Robert_", demo: "https://codedeveloper2030.github.io/Robert_/" }
];

export default function Details() {
    const [detail, setDetail] = useState<number | null>(null);

    const showDetails = (index: number) => {
        setDetail(index);
    };

    const closeDetails = () => {
        setDetail(null);
    };

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="box cursor-pointer back-gray p-2 rounded-xl lg:col-span-4 col-span-12" onClick={() => showDetails(index)}>
                    <Image src={project.src} alt={project.title} className='w-full' width={500} height={300} />
                    <h3 className='text-white text-center py-1 text-xl font-bold'>{project.title}</h3>
                </div>
            ))}
            {detail !== null && (
                <div className='clr lg:p-10 lg:my-20 lg:ms-0 lg:left-[15%] overflow-hidden absolute p-3 lg:w-3/4 left-0 rounded-lg max-h-[80vh] overflow-y-auto bg-black'>
                    <div className='flex justify-end text-end text-2xl cursor-pointer bg-transparent pb-2 text-white' onClick={closeDetails}>
                        <IoMdClose />
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className='lg:col-span-6 col-span-12 lg:pe-3'>
                            <Image src={projects[detail].src} alt={projects[detail].title} className='w-full' width={500} height={300} />
                            <div className='pt-2 flex justify-center items-center text-white'>
                                <a className='flex items-center mx-2 p-2 bg-gray-600 rounded-md' href={projects[detail].Github_src} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='me-1' />
                                    <p>GitHub</p>
                                </a>
                                <a className='flex items-center mx-2 p-2 bg-gray-600 rounded-md' href={projects[detail].demo} target="_blank" rel="noopener noreferrer">
                                    <GoProjectSymlink className='me-1' />
                                    <p>Project</p>
                                </a>
                            </div>
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <h3 className='py-1 text-2xl font-bold text-white'>{projects[detail].title}</h3>
                            <p className='text-sm py-1 text-white'>{projects[detail].desc}</p>
                            <div className='flex items-center'>
                                <div className='flex justify-between items-center pt-1 text-white'>{projects[detail].tools.map((tool, toolIndex) =>
                                    <p className='mx-2 p-2 rounded-md bg-slate-600' key={toolIndex}>{tool}</p>
                                )}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
