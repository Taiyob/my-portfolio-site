'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
    title: 'About me',
    description: 'I am a passionate and detail-oriented Web Developer with a strong foundation in front-end technologies and a growing interest in full-stack development. I enjoy creating responsive, user-friendly websites and am always eager to learn and improve.',
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
    description: 'Passionate and adaptable developer with hands-on experience in web technologies and real-world projects.',
    items: [
        {
            company: 'Freelancing',
            position: 'Self',
            duration: '2025 - Present'
        },
        {
            company: 'Simplex Solutions',
            position: 'Front-End Developer',
            duration: 'August 2023 - December 2024'
        },
        {
            company: 'Millennium System Solutions',
            position: 'Associate Web Developer',
            duration: '2022 - June  2023'
        },
        {
            company: 'Onirban Bangladesh',
            position: 'Teachical Assistant',
            duration: '2021 - 2022'
        },
    ],
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Dedicated to continuous learning with a strong foundation in computer science and modern web technologies.',
    items: [
        {
            institution: 'Phitron',
            degree: 'Programming Course',
            duration: 'Present'
        },
        {
            institution: 'Programing Hero',
            degree: 'Web Development with SQL',
            duration: '2022'
        },
        {
            institution: 'Programing Hero',
            degree: 'Web Development with NoSQL',
            duration: '2020 - 2021'
        },
        {
            institution: 'Web Code Institute',
            degree: 'Certified Web Designer',
            duration: '2019'
        },
        {
            institution: 'National University Bangladesh',
            degree: 'Computer Science & Engineering',
            duration: '2014 - 2018'
        },
    ]
}

const skills = {
    title: 'My skills',
    description: 'Proficient in a wide range of technologies, frameworks, and tools used in modern web development and UI/UX design.',
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
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            experience.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                    >
                                                        <span className='text-accent'>{item.duration}</span>
                                                        <h3 className='text-[14px] max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                        <div className='flex items-center gap-3'>
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                            <p className='text-white/60 text-xs'>{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            education.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                    >
                                                        <span className='text-accent'>{item.duration}</span>
                                                        <h3 className='text-[14px] max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                        <div className='flex items-center gap-3'>
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                            <p className='text-white/60 text-xs'>{item.institution}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className='text-4xl font-bold'>
                                        {skills.title}
                                    </h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {
                                        skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all
                                                             duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {
                                        about.info.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className='flex items-center justify-center xl:justify-start gap-4'
                                                >
                                                    <span className='text-white/60'>{item.fieldName}</span>
                                                    <span className='text-xl'>{item.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;