import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';

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
            <div className='py-2 lg:px-10 select-none md:px-6 px-4 bg-[#743060] font-sans w-full text-sm text-white text-center cursor-pointer uppercase font-bold tracking-wider'>
                Click here to Sign in
            </div>

            <div className='flex flex-row py-8 w-full items-center justify-between lg:px-10 md:px-6 px-4 border-b border-[#cccccc]'>

                <Logo />

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