'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'sonner'


const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+880 182 904 9164)',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'oli1412001@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        description: 'House-36, Kafrul, Dhaka-1206',
    },
]

const Contact = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSelect = (value) => {
        setForm({ ...form, service: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("service", form.service);
        formData.append("message", form.message);

        try {
            const scriptURL = "https://script.google.com/macros/s/AKfycbwEy4rglq_YDoBmlcLzU5SKMAkkWTfl5TFQRXQmShPUT0hWPqJ7nvi6IhDuwrRDbLrk/exec";

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Success");
                toast.success('Thanks! I’ll get back to you soon.');
                setForm({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
            } else {
                console.error("Failed to send message.");
                toast.error('Oops! Something went wrong.');
            }

        } catch (error) {
            console.error("Error:", error);
            toast.error('Oops! Something went wrong.');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>
                                Let's work together
                            </h3>
                            <p className='text-white/60'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type='text' name='firstname' value={form.firstname} onChange={handleChange} placeholder='Firstname' />
                                <Input type='text' name='lastname' value={form.lastname} onChange={handleChange} placeholder='Lastname' />
                                <Input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Email' />
                                <Input type='phone' name='phone' value={form.phone} onChange={handleChange} placeholder='Phone' />
                            </div>
                            <Select onValueChange={handleSelect}>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select a service' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value='Web Development'>Web Development</SelectItem>
                                        <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                                        <SelectItem value='Logo Design'>Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                className='h-[200px]'
                                placeholder='Type your message here'
                            />
                            <Button size='md' className='max-w-40' type='submit'>Send message</Button>
                        </form>
                    </div>
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {
                                info.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center gap-6'>
                                            <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                                <div className='text-[28px]'>{item.icon}</div>
                                            </div>
                                            <div className='flex-1'>
                                                <p className='text-white-60'>{item.title}</p>
                                                <h3 className='text-xl'>{item.description}</h3>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

// 2:46:39
// deployment id: AKfycbwEy4rglq_YDoBmlcLzU5SKMAkkWTfl5TFQRXQmShPUT0hWPqJ7nvi6IhDuwrRDbLrk
// spread sheet: https://docs.google.com/spreadsheets/d/1TW1uv3pK_26_bspsvBpNol78XGQqryp-TyXaOVJluLs/edit?gid=0#gid=0