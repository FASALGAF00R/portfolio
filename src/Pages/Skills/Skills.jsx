import { useMemo } from "react";
import SkillsList from "./SkillsList";
import { motion } from 'framer-motion';
import { animationConfigText } from "../../Helper/SliderConfig";

export const Skills = () => {

    const skillsGroups = useMemo(() => {
        const firstArray = SkillsList.slice(0, 13).concat(SkillsList.slice(0, 7));
        const secondArray = SkillsList.slice(13, 24).concat(SkillsList.slice(13, 20));
        return [
            <div className={'skills__group'} key={0}>
                {firstArray.map((skill, index) => <div className={'skills__item slideFirst'} key={index}>
                    {skill}
                </div>)}
            </div>,
            <div className={'skills__group'} key={1}>
                {secondArray.map((skill, index) => <div className={'skills__item slideSecond'} key={index}>
                    {skill}
                </div>)}
            </div>
        ];
    }, []);

    return (<section id={'skills'} className={'skills container'}>
        <div className="w-svw overflow-hidden pb-10">
            <motion.div {...animationConfigText} className='text-4xl font-semibold uppercase text-center text-white pb-2'>SKILLS </motion.div>
            <p className={'text-center text-white font pb-10 pt-5 text-xl opacity-70'}>Capabilities, I'm most proficient in</p>
            <div className={'skills__list '}>
                {skillsGroups.map((skillsGroup) => skillsGroup)}
            </div>
            <br />
        </div>
    </section>);
};