import Link from 'next/link'
import React from 'react'

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
    return (
        <div className='w-full lg:h-screen bg-white lg:py-12 py-8'>

            <div className='flex lg:flex-row lg:w-10/12 mx-auto w-full lg:px-0 md:px-6 px-4'>

                <div className='grid lg:grid-cols-2 lg:w-6/12 w-full lg:gap-0 gap-4'>

                    {
                        footerLinks?.map(item => (
                            <div className='flex flex-col lg:gap-3 gap-2'>

                                <h2 className='lg:text-base md:text-sm font-bold text-sm uppercase text-[#4d4d4d] select-none'>{item?.name}</h2>
                                {
                                    item?.links?.map(child => (
                                        <Link href={child?.link} className='lg:text-base text-sm text-[#1a1a1a] hover:text-[#743060] cursor-pointer'>
                                            {child?.name}
                                        </Link>
                                    ))
                                }

                            </div>
                        ))
                    }

                </div>

            </div>



        </div>
    )
}

export default Footer