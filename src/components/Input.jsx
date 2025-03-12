import React from 'react'

const Input = ({ type, handleChange, name, value, label, width }) => {
    return (
        <div className={`${width || 'w-fit'}`}>
            <input
                type={type}
                onChange={handleChange}
                name={name}
                value={value}
                placeholder={label}
                className='py-3 px-4 w-full bg-white border outline-none border-[#4d4d4d] lg:text-base text-sm placeholder:font-serif'
            />
        </div>
    )
}

export default Input