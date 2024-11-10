import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, disabled, onClick, children, className }) => {
    // Determine the base and hover styles based on the variant
    const baseClasses = `
    px-5 py-2.5 text-white font-medium w-[100%]
    ${variant === 'accent' ? 'bg-accentGold' : 'bg-primaryNavy'}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:bg-primaryNavy hover:text-white'}
  `;

    // Apply conditional hover colors
    const hoverClasses = disabled
        ? ''
        : variant === 'accent'
            ? 'hover:bg-primaryNavy hover:text-white'
            : 'hover:bg-accentGold hover:text-textGray';

    return (
        <button
            className={`${baseClasses} ${hoverClasses} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

// Prop types for the Button
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'accent']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

// Default props
Button.defaultProps = {
    variant: 'primary',
    disabled: false,
    onClick: () => { },
    className: '',
};

export default Button;
