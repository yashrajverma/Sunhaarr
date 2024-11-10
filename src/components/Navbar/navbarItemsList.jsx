import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const NavbarItemsList = ({ items }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <ul className="flex space-x-4">
            {items.map((item, index) => {
                if (item.type === 'link') {
                    return (
                        <li key={index}>
                            <Link to={item.href} className="text-gray-800 hover:text-primaryNavy hover:font-bold">
                                {item.label}
                            </Link>
                        </li>
                    );
                } else if (item.type === 'dropdown') {
                    return (
                        <li
                            key={index}
                            className="relative focus-within:outline-none"
                            onClick={() => handleDropdownToggle(index)}
                        >
                            <button
                                aria-expanded={openDropdown === index}
                                aria-haspopup="true"
                                className={`text-gray-800 hover:text-primaryNavy hover:font-bold focus:outline-none ${openDropdown === index ? 'hover:text-primaryNavy' : ''}`}
                            >
                                <span className='flex items-center'>{item.label} <Icon iconName='chevrondown' size={'w-4 h-4'} /></span>
                            </button>
                            <ul
                                className={`absolute left-0 w-max mt-2 space-y-2 bg-primaryNavy border border-gray-200 shadow-lg ${openDropdown === index ? 'block' : 'hidden'
                                    }`}
                                role="menu"
                            >
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} role="menuitem" className='cursor-pointer block px-4 py-2 text-softPeach hover:text-accentGold'>
                                        <Link
                                            to={subItem.href}
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                }
                return null;
            })}
        </ul>
    );
};

// Define PropTypes
NavbarItemsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['link', 'dropdown']).isRequired,
            label: PropTypes.string.isRequired,
            href: PropTypes.string, // For 'link' type
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    href: PropTypes.string.isRequired,
                })
            ), // For 'dropdown' type
        })
    ).isRequired,
};

export default NavbarItemsList;
