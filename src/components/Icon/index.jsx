import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './iconMap';

const Icon = ({ iconName, variant = 'outline', size, color, className, onClick, hasBadge, badgeClasses, badgeText }) => {
    const IconComponent = getIcon(iconName, variant)

    if (!IconComponent) {
        console.warn(`Icon "${iconName}" does not exist in Icons`);
        return null;
    }

    return (
        hasBadge ?
            <button type="button" className="relative inline-flex items-center text-center">
                <IconComponent className={`${className} ${size} ${color} cursor-pointer`}
                    onClick={onClick} />
                <span className="sr-only">Notifications</span>
                <div className={`absolute inline-flex items-center justify-center min-w-4 max-w-max max-h-max min-h-4 text-xs text-white font-semibold bg-primaryNavy ${badgeClasses} rounded-full -top-2 -end-2 dark:border-gray-900`}>{badgeText}</div>
            </button>
            :
            <IconComponent
                className={`${className} ${size} ${color} cursor-pointer`}
                onClick={onClick}
            />
    );
};

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    size: 'w-6 h-6',
    color: 'text-gray-800',
    className: '',
    onClick: null,
};

export default Icon;
