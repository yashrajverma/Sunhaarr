import React from "react";
import NavbarItemsList from "./navbarItemsList";
import Icon from "../Icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    { type: 'link', label: 'Earrings', href: '/products?search=earrings' },
    { type: 'link', label: 'Maang Tikka', href: '/products?search=tikka' },
    {
      type: 'dropdown',
      label: 'Necklace',
      items: [
        { label: 'Pearl Necklace', href: '/products?search=pearl_necklace' },
        { label: 'Everyday Necklace', href: '/products?search=everyday_necklace' },
        { label: 'Wedding Necklace', href: '/products?search=wedding_necklace' },
        { label: 'MangalSutra', href: '/products?search=mangalsutra' },
      ]
    },
    { type: 'link', label: 'Rings', href: '/contact' },
    {
      type: 'dropdown',
      label: 'Chains',
      items: [
        { label: 'Men Chains', href: '/products?search=men_chains' },
        { label: 'Women Chains', href: '/products?search=women_chains' },
        { label: 'Child Chains', href: '/products?search=child_chains' },
      ]
    },
    {
      type: 'dropdown',
      label: 'Gold/Silver',
      items: [
        { label: '18kt Gold', href: '/products?search=18kt' },
        { label: '20kt Gold', href: '/products?search=20kt' },
        { label: '22kt Gold', href: '/products?search=22kt' },
      ]
    },
    { type: 'link', label: 'Best Sellers', href: '/products?search=best_sellers' }
  ];

  return <div className="w-100 bg-softPeach h-max py-3 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-600">
    <div className="flex justify-between px-16 items-center">
      <div className="flex justify-start items-center">
        <Icon iconName="magnifyingglass" size={'w-4 h-4'} />
        <input placeholder="What are you looking for? " className="rounded-md text-sm bg-transparent w-[100%] border-none outline-none focus:border-none p-3 focus:outline-none" />
      </div>
      <div>
        <Link to={'/'}>
          <h1 className="text-accentGold text-2xl font-bold">Sunhaarr.com</h1>
        </Link>
      </div>
      <div className="flex justify-start gap-1">
        <Icon iconName="user" color={'text-primaryNavy'} />
        <Icon iconName="heart" color={'text-primaryNavy'} />
        <Link to={'/cart'}>
          <Icon iconName="shoppingbag" color={'text-primaryNavy'} hasBadge={true} badgeText={'0'} />
        </Link>
      </div>
    </div>
    <div className="">
      <div className="flex items-center justify-center border border-t-1 border-l-0 border-r-0 border-b-0 border-gray-200 pt-1">
        <NavbarItemsList items={navbarItems} />
      </div>
    </div>
  </div>;
};

export default Navbar;
