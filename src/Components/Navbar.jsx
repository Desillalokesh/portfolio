import React from 'react'
import logo from '../assets/personal/pic.jpg'
import {FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa'
const Navbar = () => {
    return (
    <nav className='flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label='Home'>
            <img src={logo} alt="logo" className="w-12 h-auto mx-2 rounded-full"/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <FaLinkedin/>
            </a>
            <a href="https://github.com/Desillalokesh" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FaGithub/>
            </a>
            <a href="https://www.instagram.com/amigo_lokii/" target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <FaInstagram/>
            </a>
           
        </div>
    </nav>
    )
}

export default Navbar