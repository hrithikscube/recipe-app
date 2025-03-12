import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
    const Router = useRouter()
    return (
        <button
            onClick={() => {
                Router.push('/')
            }}
            className='text-[1.2rem] lg:text-[2rem] font-serif text-[#743060] cursor-pointer font-light'>pinch<span className='text-[#4d4d4d]'> of </span>yum</button>

    )
}

export default Logo