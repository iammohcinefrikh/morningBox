"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search", href: "/search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart", href: "/favorites" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between shadow-lg">
      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center gap-3" prefetch={false}>
        <BoxIcon className="h-10 w-10 text-primary-foreground" />
        <span className="text-2xl font-bold">MorningBox</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="/about"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="/checkout"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          Shopping Cart
        </Link>
        <Link
          href="/dashboard-delivary"
          className="text-sm font-semibold hover:text-secondary"
          prefetch={false}
        >
          Dashboard
        </Link>
      </nav>

      {/* Icons, Profile Image and Sign-In Button */}
      <div className="flex items-center gap-4">
        {/* Navigation Icons */}
        <div className="hidden md:flex gap-4">
          {navIcons.map((icon, index) => (
            <Link href={icon.href} key={index}>
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </Link>
          ))}
        </div>

        {/* Profile Image with Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </Link>
            </div>
          )}
        </div>

        {/* Sign-In Button */}
        <Link href="/login">
          <Button
            variant="outline"
            className="hidden md:inline-flex text-gray-600"
          >
            Sign In
          </Button>
        </Link>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Component
const MobileMenu = () => {
  return (
    <div>
      {/* Add mobile menu functionality here, like a dropdown or slide-out menu */}
      <Button variant="ghost" className="text-primary-foreground">
        <MenuIcon />
      </Button>
    </div>
  );
};

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

export default Navbar;

function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
