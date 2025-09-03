import React, { useState, useMemo, lazy, Suspense } from "react";
import NavbarItemsList from "./navbarItemsList";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import checkTokenExpired from "../../utils/checkTokenExpired";
import { BrandName } from "../../constants";
import { getSearch } from "../../routines";
import debounce from "../../utils/debounce";

const Modal = lazy(() => import("../Modal"));

const Navbar = ({ cartItems, user, getSearch, search }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setShowSearch] = useState(false);

  const navbarItems = useMemo(() => [
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
    { type: 'link', label: 'Rings', href: '/products?category=rings' },
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
  ], []);

  const handleSearch = (e) => {
    try {
      const { value } = e.target;
      debounce(getSearch({ query: value }), 3000)
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full bg-softPeach h-max py-3 border-b border-gray-600">
      <div className="block text-center mb-3 md:hidden">
        <Link to="/">
          <h1 className="text-primaryNavy text-2xl font-bold stroke-2 ">{BrandName}</h1>
        </Link>
      </div>
      <div className="flex justify-between px-6 md:px-16 items-center">
        {/* Left Side: Search */}
        <div className="flex items-center w-full md:w-auto border-2 border-primaryNavy border-opacity-75 px-2">
          <Icon iconName="magnifyingglass" size="w-4 h-4" />
          <input
            placeholder="What are you looking for?"
            className="rounded-md text-sm bg-transparent w-full md:w-auto border-none outline-none p-2 focus:border-none focus:outline-none focus:ring-0"
            onClick={() => { setShowSearch(true) }}
          />
        </div>

        {/* Center: Logo */}
        <div className="hidden md:block">
          <Link to="/">
            <h1 className="animate-text bg-gradient-to-r from-primaryNavy via-accentGold to-yellow-700 bg-clip-text text-transparent font-black text-3xl font-extrabold ">{BrandName}</h1>
          </Link>
        </div>

        {/* Right Side: Icons and Hamburger Menu */}
        <div className="flex items-center gap-2 md:gap-1">
          {/* Desktop Icons */}
          <div className="hidden md:flex gap-1">
            <Link to={checkTokenExpired(user.expires) ? '/account' : '/login'}>
              <Icon iconName="user" color="text-primaryNavy" />
            </Link>
            {/* <Link to='/wishlist'>
              <Icon iconName="heart" color="text-primaryNavy" hasBadge badgeText={cartItems} />
            </Link> */}
            <Link to="/cart">
              <Icon iconName="shoppingbag" color="text-primaryNavy" hasBadge badgeText={cartItems} />
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
            <div className="mt-3 flex gap-1">
              <Link to={checkTokenExpired(user.expires) ? '/account' : '/login'}>
                <Icon iconName="user" color="text-primaryNavy" />
              </Link>
              <Link to='/wishlist'>
                <Icon iconName="heart" color="text-primaryNavy" />
              </Link>
              <Link to="/cart">
                <Icon iconName="shoppingbag" color="text-primaryNavy" hasBadge badgeText={cartItems} />
              </Link>
            </div>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Modal show={isSearchOpen} setShow={setShowSearch} className={'h-20rem overflow-auto w-[50vw]'}>
          <input
            placeholder="What are you looking for?"
            className="rounded-md text-sm bg-transparent w-[70%] focus-within:border-primaryNavy md:w-auto border-none outline-none p-2 focus:border-none focus:outline-none focus:ring-0"
            onChange={handleSearch}
            onClick={() => { setShowSearch(true) }}
          />
          {search &&
            (<div className="overflow-y-auto mt-5 border-primaryNavy border">
              {search.map(item => (
                <Link key={item.id} to={`/product/${item.id}`} className="block p-2 hover:bg-primaryNavy hover:text-white" onClick={() => setShowSearch(false)}>
                  {item.name}
                </Link>
              ))}
            </div>)}
        </Modal>
      </Suspense>

    </div>
  );
};

Navbar.defaultProps = {
  user: {},
  cartItems: 0
}

const mapStateToProps = ({ user, search }) => {
  const cartLength = user.cartItems != null ? user.cartItems.length : 0
  return { cartItems: cartLength, user, search }
}

const mapDispatchToProps = {
  getSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
