import React, { useState } from 'react';
import { useRouter } from 'next/router';

const headerLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Recipes',
        link: '/recipes',
    },
    {
        name: 'Start Here',
        link: '/start-here',
    },
]

const Header = () => {

    const Router = useRouter()

    const [mStates, setMStates] = useState({
        sign_up: {
            isOpen: false
        }
    })

    const toggleModalOpen = (name) => {
        let temp = { ...mStates }
        temp[name].isOpen = true
        setMStates(temp)
    }

    const toggleModalClose = (name) => {
        let temp = { ...mStates }
        temp[name].isOpen = false
        setMStates(temp)
    }

    return (
        <div>
            <div className='py-3 lg:px-10 select-none md:px-6 px-4 bg-violet-900 font-sans w-full lg:text-base text-sm text-white text-center cursor-pointer'>
                Click here to Sign in
            </div>

            <div className='flex flex-row py-3 w-full items-center justify-between lg:px-10 md:px-6 px-4 border-b border-[#cccccc]'>

                <button
                    onClick={() => {
                        Router.push('/')
                    }}
                    className='text-[1.2rem] lg:text-[2rem] font-serif text-[#743060] cursor-pointer font-light'>pinch <span className='text-[#4d4d4d]'>of</span> yum</button>

                <div className='lg:flex hidden flex-row items-center lg:gap-6'>
                    {headerLinks?.map(item => (
                        <button onClick={() => {
                            Router.push(item?.link)
                        }}
                            className='lg:text-base text-sm font-sans uppercase text-[#1a1a1a] font-semibold cursor-pointer'
                        >
                            {item?.name}
                        </button>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Header