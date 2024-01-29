"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenu from './MobileMenu';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#202020] bg-opacity-100 shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 pt-2 pb-4">
            <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                manng
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    navbarOpen ? (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <CloseIcon className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <MenuIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {/* <button onClick={() => window.open("https://github.com/manngup")}>
                        <GitHubIcon className="w-10 h-10" />
                    </button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/manngupta22/")}>
                        <LinkedInIcon className="w-10 h-10" />
                    </button> */}
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MobileMenu links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar;