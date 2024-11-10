import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon';

const NavbarItemsList = ({ items }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full md:w-auto">
            {items.map((item, index) => {
                if (item.type === 'link') {
                    return (
                        <li key={index} className="text-left md:text-left">
                            <NavLink to={item.href} className="text-gray-800 hover:text-primaryNavy hover:font-bold block">
                                {item.label}
                            </NavLink>
                        </li>
                    );
                } else if (item.type === 'dropdown') {
                    return (
                        <li
                            key={index}
                            className="relative focus-within:outline-none text-center md:text-left"
                        >
                            <button
                                onClick={() => handleDropdownToggle(index)}
                                aria-expanded={openDropdown === index}
                                aria-haspopup="true"
                                className={`text-gray-800 hover:text-primaryNavy hover:font-bold focus:outline-none flex items-center justify-center md:justify-start ${openDropdown === index ? 'hover:text-primaryNavy font-bold' : ''}`}
                            >
                                <span className="flex items-center justify-center md:justify-start border-2 border-b-slate-300 border-t-0 border-l-0 border-r-0">
                                    {item.label}
                                </span>
                            </button>
                            <div
                                className={`${openDropdown === index ? 'block' : 'hidden'
                                    } z-50 text-left md:absolute md:left-0 w-full md:w-max mt-2 space-y-2 bg-primaryNavy border border-gray-200 shadow-lg `}
                                role="menu"
                            >
                                {item.items.map((subItem, subIndex) => {
                                    return (
                                        <NavLink to={subItem.href} key={subIndex} role="menuitem" className="z-10 cursor-pointer block px-4 py-2 text-softPeach hover:text-accentGold md:text-left ">
                                            {subItem.label}
                                        </NavLink>
                                    )
                                })}
                            </div>
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
