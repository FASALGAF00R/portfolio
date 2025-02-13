import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, EnvelopeIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolidIcon, HomeIcon as HomeOutlineIcon, RectangleStackIcon as StackSolidIcon, RectangleStackIcon as StackOutlineIcon, BriefcaseIcon as BriefcaseSolidIcon, BriefcaseIcon as BriefcaseOutlineIcon, EnvelopeIcon as EnvelopeSolidIcon, EnvelopeIcon as EnvelopeOutlineIcon } from '@heroicons/react/24/solid';

function Footer({ scrollToSection }) {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };
    return (
        <motion.div initial={{ opacity: 0, y: 100, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3 }} className='md:hidden block fixed bottom-0 w-full bg-black'>
            <div className="flex justify-between p-5 pt-3 items-center">
                <div
                    onClick={() => scrollToSection('headerRef')}
                    onMouseEnter={() => handleMouseEnter('home')}
                    onMouseLeave={handleMouseLeave}
                    className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                >
                    {hoveredIcon === 'home' ? (
                        <HomeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                    ) : (
                        <HomeIcon className="h-6 w-6 text-[#79ff5e]" />
                    )}
                </div>
                <div
                    onClick={() => scrollToSection('skillsRef')}
                    onMouseEnter={() => handleMouseEnter('stack')}
                    onMouseLeave={handleMouseLeave}
                    className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                >
                    {hoveredIcon === 'stack' ? (
                        <StackSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                    ) : (
                        <RectangleStackIcon className="h-6 w-6 text-[#79ff5e]" />
                    )}
                </div>
                <div
                    onClick={() => scrollToSection('projectsRef')}
                    onMouseEnter={() => handleMouseEnter('briefcase')}
                    onMouseLeave={handleMouseLeave}
                    className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                >
                    {hoveredIcon === 'briefcase' ? (
                        <BriefcaseSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                    ) : (
                        <BriefcaseIcon className="h-6 w-6 text-[#79ff5e]" />
                    )}
                </div>
                <div
                    onClick={() => scrollToSection('contactRef')}
                    onMouseEnter={() => handleMouseEnter('envelope')}
                    onMouseLeave={handleMouseLeave}
                    className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                >
                    {hoveredIcon === 'envelope' ? (
                        <EnvelopeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                    ) : (
                        <EnvelopeIcon className="h-6 w-6 text-[#79ff5e]" />
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Footer