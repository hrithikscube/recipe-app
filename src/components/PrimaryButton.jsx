import React from 'react'

const PrimaryButton = ({ label, onClick, width, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick} className={`${width || 'w-fit'} bg-[#743060] hover:bg-[#1a1a1a] cursor-pointer uppercase text-white py-3 px-6 lg:text-base text-sm tracking-wider font-semibold disabled:opacity-60 disabled:cursor-not-allowed`}>
            {label}
        </button>
    )
}

export default PrimaryButton