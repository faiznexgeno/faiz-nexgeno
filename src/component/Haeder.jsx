import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  return (
    <header className="bg-white shadow">
      {/* Top Navigation */}
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex dm:w-[80%] items-center">
          <img
            src="https://i.ibb.co/2qVrG9S/Macro-1-1.png" // Replace with your logo URL
            alt="Macro Footwear"
            className="h-10"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 md:mx-8">
          <div className="relative dm:mt-32">
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="w-full px-4 dm:w-[200px] py-2 rounded-full border border-gray-300"
            />
            <SearchIcon className="absolute right-3 dm:-right-7 top-2.5 text-gray-500" />
          </div>
        </div>

        {/* User Login */}
        <div className="flex items-center space-x-6">
          <a
            href="/login"
            className="flex items-center space-x-1 text-gray-800 hover:text-gray-600"
            aria-label="Login or Registration"
          >
            <AccountCircleIcon />
            <span>Login | Registration</span>
          </a>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-3">
          {/* Categories Dropdown */}
          <div className="flex items-center space-x-4">
            <a href="/categories" className="hover:text-gray-400">
              Categories (See All)
            </a>
          </div>

          {/* Responsive Menu Toggle for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Us" />
            <NavLink href="/shop" label="Shop" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/contacts" label="Contacts" />
          </div>

          {/* Shopping Cart Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <a
                href="/cart"
                className="text-white hover:text-gray-400 flex items-center"
                aria-label="Shopping Cart"
              >
                <ShoppingCartIcon />
              </a>
            </div>
            <span className="text-white">$0.000</span>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-900 py-2">
            <NavLink href="/" label="Home" isMobile />
            <NavLink href="/about" label="About Us" isMobile />
            <NavLink href="/shop" label="Shop" isMobile />
            <NavLink href="/products" label="Products" isMobile />
            <NavLink href="/contacts" label="Contacts" isMobile />
          </div>
        )}
      </nav>
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ href, label, isMobile }) => (
  <a
    href={href}
    className={`${
      isMobile ? "text-white hover:text-gray-400 py-1" : "hover:text-gray-400"
    }`}
  >
    {label}
  </a>
);

export default Header;
