import React from 'react'

const SecondayButton = ({ label, type = "button", onClick, width, disabled }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick} className={`${width || 'w-fit'} bg-transparent cursor-pointer uppercase text-amber-400 hover:text-[#1a1a1a] py-3 lg:text-base text-sm tracking-wider font-semibold disabled:opacity-60 disabled:cursor-not-allowed`}>
            {label}
        </button>
    )
}

export default SecondayButton