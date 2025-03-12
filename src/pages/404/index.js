import React from 'react'

const PageNotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-2 lg:px-0 md:px-6 px-4'>

            <h1 className='lg:text-4xl md:text-2xl text-xl font-bold text-[#121212]'>404 | Page Not Found!</h1>

            <p className='lg:text-lg md:text-base text-sm text-center md:w-full w-10/12 mx-auto'>The page you are looking for might have been moved or does not exists!</p>

        </div>
    )
}

export default PageNotFound