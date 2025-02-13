import React from 'react'
import { motion } from 'framer-motion';

function Header({ scrollToSection }) {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: -100, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3 }} className='p-5 text-white'>
                <div className='lg:hidden block pb-2 border-b-[1px] border-[#2d2d2d]'>
                    <h1 className='uppercase font-semibold text-2xl text-shadow-md p-2 ml-10'>MOHAMED FASAL GAFOOR M</h1>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex justify-between items-center text-center pb-5 border-b-[1px] rounded-2xl border-[#2d2d2d] special-shadow  shadow-[0px_0px_10px_0px_#79ff5e]'>
                        <div className='mt4'>
                             <h1 className='uppercase font-semibold text-2xl  mt-4 p-2 ml-10'>MOHAMED FASAL GAFOOR</h1> 
                        </div>
                            {/* <h3 className="font-medium hover:cursor-pointer hover:scale-105 p-2 rounded-xl w-24 text-center transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff007f] hover:via-[#79ff5e] hover:to-[#00d1ff] hover:shadow-[0_5px_8px_#ff007f,0_-5px_8px_#00d1ff,5px_0_8px_#ffda00,-5px_0_8px_#72ff00]"> */}
                            <div className="flex gap-10 justify-end mr-24 items-center mt-4">
                                <h3
                                    onClick={() => scrollToSection('headerRef')}
                                    className="font-medium hover:cursor-pointer hover:scale-105 p-2 rounded-xl w-24 text-center transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fff951] hover:to-[#00ddff] hover:shadow-[0_5px_8px_#fff951,0_-5px_8px_#00ddff,5px_0_8px_#fff951,-5px_0_8px_#00ddff]"
                                >
                                    Home
                                </h3>
                                <h3
                                    onClick={() => scrollToSection('projectsRef')}
                                    className="font-medium hover:cursor-pointer hover:scale-105 p-2 rounded-xl w-24 text-center transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fff951] hover:to-[#00ddff] hover:shadow-[0_5px_8px_#fff951,0_-5px_8px_#00ddff,5px_0_8px_#fff951,-5px_0_8px_#00ddff]"
                                >
                                    Works
                                </h3>
                                <h3
                                    onClick={() => scrollToSection('skillsRef')}
                                    className="font-medium hover:cursor-pointer hover:scale-105 p-2 rounded-xl w-24 text-center transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fff951] hover:to-[#00ddff] hover:shadow-[0_5px_8px_#fff951,0_-5px_8px_#00ddff,5px_0_8px_#fff951,-5px_0_8px_#00ddff]"
                                >
                                    Skills
                                </h3>
                                <h3
                                    onClick={() => scrollToSection('contactRef')}
                                    className="font-medium hover:cursor-pointer hover:scale-105 p-2 rounded-xl w-24 text-center transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fff951] hover:to-[#00ddff] hover:shadow-[0_5px_8px_#fff951,0_-5px_8px_#00ddff,5px_0_8px_#fff951,-5px_0_8px_#00ddff]"
                                >
                                    Contact
                                </h3>
                            </div>

                    </div>
                </div>
            </motion.div>
            <br />
            <div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} >
                    <h1 className=' text-[#FAFAFA] pl-1 pr-1  text-center text-xl sm:text-6xl font-semibold shadow-lg animate-pulse'><span className='opacity-50'>A Passionate </span><span className='bg-gradient-to-r from-[#fff951] via-[#79ff5e] to-[#00d1ff] bg-clip-text text-transparent'>FullStack</span><span className='opacity-50'> Developer </span><br /> <span className='opacity-50 '>Crafting </span><span className='bg-gradient-to-r from-[#fff951] via-[#79ff5e] to-[#00d1ff] bg-clip-text text-transparent'>Quality</span><span className='opacity-50 '>  Code.</span></h1>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='sm:pl-32 sm:pr-32 p-5 pt-14 pb-14' >
                    <p className={'text-white opacity-70 text-2xl text-justify pb-10'}>
                        I am Mohamed fasal gafoor, a proficient full-stack web developer specializing in nodejs, express js, and React. I am committed to delivering high-quality, scalable solutions that meet the needs of modern web applications. My passion for technology drives me to continuously enhance my skills and stay updated with industry trends.
                    </p>
                    <p className={'text-white opacity-70 text-2xl text-justify pb-10'}>
                        I have a strong background in both back-end development with expressjs and front-end development with React. I focus on building seamless user experiences while ensuring robust performance and functionality across both the front-end and back-end of web applications.
                    </p>
                    <p className={'text-white opacity-70 text-2xl text-justify pb-10'}>
                        I am actively seeking a position where I can leverage my expertise in nodejs, React, and full-stack development to contribute to impactful projects and continue growing professionally.
                    </p>

                </motion.div>
                <br />
            </div>
        </>
    )
}

export default Header