'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

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

const Resume = () => {
    return (
        <div>
            Resume page
        </div>
    );
};

export default Resume;