'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus obcaecati nobis.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Taiyob'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+880) 182 904 9164'
        },
        {
            fieldName: 'Experinece',
            fieldValue: '1+ years'
        },
        {
            fieldName: 'Skype',
            fieldValue: 'Md Oli'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Bangladeshi'
        },
        {
            fieldName: 'Email',
            fieldValue: 'oli1412001@gmail.com'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Language',
            fieldValue: 'Bangla, English'
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus obcaecati nobis.',
    items: [
        {
            company: 'Tech Solutions',
            position: 'Full Stack Developer',
            duration: '2022 - present'
        },
        {
            company: 'Design Studio',
            position: 'Front-End Developer Intern',
            duration: 'Winter 2021'
        },
        {
            company: 'E-commerce Startup',
            position: 'Freelance Web Developer',
            duration: '2020 - 2021'
        },
        {
            company: 'E-Tech Academy',
            position: 'Teaching Assistant',
            duration: '2019 - 2020'
        },
    ],
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus obcaecati nobis.',
    items: [
        {
            institution: 'Online Course Platform',
            degree: 'Full Stack Web Development Bootcamp',
            duration: '2023'
        },
        {
            institution: 'Codeacademy',
            degree: 'Front-end Track',
            duration: '2022'
        },
        {
            institution: 'Online Course',
            degree: 'Programming Course',
            duration: '2020 - 2021'
        },
        {
            institution: 'Tech Institute',
            degree: 'Certified Web Developer',
            duration: '2019'
        },
        {
            institution: 'Design School',
            degree: 'Diploma in Grapic School',
            duration: '2016 - 2018'
        },
    ]
}

const skills = {
    title: 'My skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus obcaecati nobis.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: 'css3'
        },
        {
            icon: <FaJs />,
            name: 'javascript'
        },
        {
            icon: <FaReact />,
            name: 'react.js'
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js'
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css'
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js'
        },
        {
            icon: <FaFigma />,
            name: 'figma'
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className='w-full'>
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;