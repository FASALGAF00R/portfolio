import React from 'react'
import { animationConfig, animationConfigText, settingsSlider6 } from '../../Helper/SliderConfig'
import Slider from 'react-slick'
import { ProjectsData } from './AllProjects'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion';


function Projects() {
    return (
        <motion.div {...animationConfig} className="p-5">
            <motion.div {...animationConfigText} className="text-4xl font-semibold uppercase text-center text-white pb-2">
                Works
            </motion.div>
            <p className={'text-center text-white font pb-10 pt-5 text-xl opacity-70 '}>Works, I'm most Proud of</p>
            <div className="p-5">
                <Slider {...settingsSlider6} className="p-5">
                    {ProjectsData.map((section, index) => (
                        <div
                            key={index}
                            className="p-5"
                        >
                            <Card
                                shadow={false}
                                className="relative grid h-[20rem] special-shadow w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="absolute inset-0 m-0 h-full w-full bg-no-repeat bg-cover rounded-none"
                                    style={{ backgroundImage: `url(${section.image})` }}  >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                </CardHeader>
                                <CardBody className="relative py-14 px-6 md:px-12">
                                    <h3
                                        className="text-2xl text-white pb-2"
                                    >
                                        {section.title}
                                    </h3>
                                    <p className="mb-4 text-gray-400">
                                        T{section.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    )
}

export default Projects