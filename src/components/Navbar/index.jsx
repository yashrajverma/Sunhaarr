import React, { useState } from "react";
import NavbarItemsList from "./navbarItemsList";
import Icon from "../Icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarItems = [
    { type: 'link', label: 'Earrings', href: '/products?category=earring' },
    { type: 'link', label: 'Maang Tikka', href: '/products?category=tikka' },
    {
      type: 'dropdown',
      label: 'Necklace',
      items: [
        { label: 'Pearl Necklace', href: '/products?category=pearl_necklace' },
        { label: 'Everyday Necklace', href: '/products?category=everyday_necklace' },
        { label: 'Wedding Necklace', href: '/products?category=wedding_necklace' },
        { label: 'MangalSutra', href: '/products?category=mangalsutra' },
      ]
    },
    { type: 'link', label: 'Rings', href: '/contact' },
    {
      type: 'dropdown',
      label: 'Chains',
      items: [
        { label: 'Men Chains', href: '/products?category=men_chains' },
        { label: 'Women Chains', href: '/products?category=women_chains' },
        { label: 'Child Chains', href: '/products?category=child_chains' },
      ]
    },
    {
      type: 'dropdown',
      label: 'Gold/Silver',
      items: [
        { label: '18kt Gold', href: '/products?category=18kt' },
        { label: '20kt Gold', href: '/products?category=20kt' },
        { label: '22kt Gold', href: '/products?category=22kt' },
      ]
    },
    { type: 'link', label: 'Best Sellers', href: '/products?category=best_sellers' }
  ];

  return (
    <div className="w-full bg-softPeach h-max py-3 border-b border-gray-600">
      <div className="block text-center mb-3 md:hidden">
        <Link to="/">
          <h1 className="text-accentGold text-2xl font-bold">Sunhaarr.com</h1>
        </Link>
      </div>
      <div className="flex justify-between px-6 md:px-16 items-center">
        {/* Left Side: Search */}
        <div className="flex items-center w-full md:w-auto border-2 border-primaryNavy border-opacity-75 px-2">
          <Icon iconName="magnifyingglass" size="w-4 h-4" />
          <input
            placeholder="What are you looking for?"
            className="rounded-md text-sm bg-transparent w-full md:w-auto w-full border-none outline-none p-2 focus:border-none focus:outline-none focus:ring-0"
          />

        </div>

        {/* Center: Logo */}
        <div className="hidden md:block">
          <Link to="/">
            <h1 className="text-accentGold text-2xl font-bold">Sunhaarr.com</h1>
          </Link>
        </div>

        {/* Right Side: Icons and Hamburger Menu */}
        <div className="flex items-center gap-2 md:gap-1">
          {/* Desktop Icons */}
          <div className="hidden md:flex gap-1">
            <Link to='/login'>
              <Icon iconName="user" color="text-primaryNavy" />
            </Link>
            <Link to='/wishlist'>
              <Icon iconName="heart" color="text-primaryNavy" />
            </Link>
            <Link to="/cart">
              <Icon iconName="shoppingbag" color="text-primaryNavy" hasBadge badgeText="0" />
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden ml-2">
            <Icon iconName="bars3" size="w-6 h-6" color="text-primaryNavy" />
          </button>
        </div>
      </div>

      {/* Navbar Links: Desktop & Mobile Sidebar */}
      <div className="hidden md:flex items-center justify-center border-t border-gray-200 pt-1">
        <NavbarItemsList items={navbarItems} />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col items-center pt-5">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end pr-5">
            <Icon iconName="xcircle" size="w-6 h-6" color="text-primaryNavy" />
          </button>
          <div className="mt-10">
            <NavbarItemsList items={navbarItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
