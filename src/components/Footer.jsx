import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import Input from './Input'
import TernaryButton from './TernaryButton'

const footerLinks = [
    {
        name: 'Pinch of Yum',
        links: [
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Recipes',
                link: '/recipes'
            },
            {
                name: 'Blogging Resources',
                link: '/blogging-resources'
            },
            {
                name: 'Income Reports',
                link: '/income-reports'
            },
            {
                name: 'Sponsored Content',
                link: '/sponsored-content'
            },
            {
                name: 'Media Mentions',
                link: '/media-mentions'
            },
            {
                name: 'Contact',
                link: '/contact'
            },
        ]
    },
    {
        name: 'Food & Recipes',
        links: [
            {
                name: 'Breakfast Recipes',
                link: '/breakfast-recipes'
            },
            {
                name: 'Sugar Free',
                link: '/sugar-free'
            },
            {
                name: 'Lunch Recipes',
                link: '/lunch-recipes'
            },
            {
                name: 'Dinner',
                link: '/dinner-recipes'
            },
        ]
    }
]

const Footer = () => {

    const initial_states = {
        first_name: '',
        email: ''
    }

    const [params, setParams] = useState(initial_states)

    const handleChange = (e) => {
        let { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    return (
        <div className='w-full bg-white lg:py-12 py-8 lg:gap-20 gap-12 flex flex-col'>

            <div className='flex lg:flex-row flex-col-reverse lg:w-10/12 mx-auto w-full lg:px-0 md:px-6 px-4 lg:gap-0 gap-4'>

                <div className='flex flex-col lg:w-6/12 w-full lg:gap-6 gap-4'>
                    <div className='grid lg:grid-cols-2 lg:gap-0 gap-4'>

                        {
                            footerLinks?.map(item => (
                                <div className='flex flex-col lg:gap-3 gap-2'>

                                    <h2 className='lg:text-sm md:text-sm font-bold text-sm uppercase text-[#4d4d4d] select-none'>{item?.name}</h2>
                                    {
                                        item?.links?.map(child => (
                                            <Link href={child?.link} className='lg:text-sm text-sm text-[#1a1a1a] hover:text-[#743060] cursor-pointer'>
                                                {child?.name}
                                            </Link>
                                        ))
                                    }

                                </div>
                            ))
                        }

                    </div>

                    <div className='flex lg:flex-row flex-col w-full lg:gap-0 gap-4'>
                        <div className='lg:w-4/12'>
                            <Logo />
                        </div>
                        <p className='lg:text-sm text-xs font-medium text-[#4d4d4d] lg:w-6/12 mx-auto'>© 2025 Pinch of Yum. All Rights Reserved.A Raptive Partner Site.</p>
                    </div>
                </div>

                <div className='flex flex-col lg:w-6/12 w-full lg:gap-6 gap-4'>

                    <div className="w-full bg-[#743060] flex flex-col lg:p-6 p-4 lg:gap-4 gap-2">

                        <div>
                            <h3 className="text-white lg:text-lg md:text-base text-sm tracking-normal text-center"><span className="uppercase tracking-wide font-bold">Sign up for Email Updates</span></h3>
                            <p className='lg:text-base text-sm text-[#cccccc] text-center'>Get a Free Cookbook with our top 25 recipes</p>
                        </div>

                        <div className='flex lg:flex-row flex-col gap-2 lg:w-fit w-full'>

                            <Input
                                label="First Name"
                                name="first_name"
                                value={params?.first_name}
                                handleChange={handleChange}
                                width="lg:w-fit w-full"
                            />

                            <Input
                                label="Email"
                                name="email"
                                value={params?.email}
                                handleChange={handleChange}
                                width="lg:w-fit w-full"
                            />

                            <TernaryButton label="Go"
                                width="lg:w-fit w-fit ml-auto"
                            />

                        </div>

                    </div>

                </div>

            </div>

            <div className='flex flex-row lg:gap-6 gap-4 items-center justify-center'>

                <Link href="/privacy-policy" className='lg:text-sm text-sm text-[#4d4d4d]'>
                    Privacy Policy
                </Link>

                <Link href="/terms" className='lg:text-sm text-sm text-[#4d4d4d]'>
                    Terms
                </Link>

            </div>



        </div>
    )
}

export default Footer