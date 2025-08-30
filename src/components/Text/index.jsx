import React from 'react'

const variants = {
    xs: 'text-xs sm:text-sm md:text-xs',
    sm: 'text-sm sm:text-base md:text-sm',
    base: 'text-base sm:text-lg md:text-base',
    lg: 'text-lg sm:text-xl md:text-lg',
    xl: 'text-xl sm:text-2xl md:text-xl',
    '2xl': 'text-2xl sm:text-3xl md:text-2xl',
    '3xl': 'text-3xl sm:text-4xl md:text-3xl',
    '4xl': 'text-4xl sm:text-5xl md:text-4xl',
    '5xl': 'text-5xl sm:text-6xl md:text-5xl',
    '6xl': 'text-6xl sm:text-7xl md:text-6xl',
}

const Text = ({ children, className, variant = 'base' }) => {
    return (
        <p className={`${variants[variant]} ${className || ''}`}>
            {children}
        </p>
    )
}

export default Text