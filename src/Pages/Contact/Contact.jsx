import React from 'react'
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { animationConfig, animationConfigText } from '../../Helper/SliderConfig';

function Contact() {
    return (
        <>
            <motion.div {...animationConfigText} className='text-center text-2xl special-text p-5 font-medium'>
                Let’s connect, collaborate, and create something extraordinary together
            </motion.div>
            <br />
            <motion.div {...animationConfig} className={'home__links flex gap-20 justify-center pb-10 '}>
                <p>
                    <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/mohamed-fasal-m-768b05262/')} className='hover:cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out' />
                </p>
                <p>
                    <FaGithub onClick={() => window.open('https://github.com/FASALGAF00R')} className='hover:cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out' />
                </p>
                <p>
                    <FaEnvelope onClick={() => window.open('mailto:fasalgafoor2080@gmail.com')} className='hover:cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out' />
                </p>
                {/* <p>
                    <FaInstagram onClick={() => window.open('https://www.instagram.com/_f_asalu/')} className='hover:cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out' />
                </p> */}
                <p> 
                    <FaWhatsapp onClick={() => window.open('https://wa.me/+918156998900', '_blank')} className='hover:cursor-pointer hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out' />
                </p>

            </motion.div>
            <br />
            <br />
        </>
    )
}

export default Contact