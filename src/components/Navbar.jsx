import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo/QMSSmallLogo.png";
import GooeyNav from "./ui/GooeyNav/GooeyNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Shrink header + change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items for GooeyNav
  const gooeyItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="QMS Logo"
            className={`transition-all duration-300 ${
              scrolled ? "w-20" : "w-28"
            }`}
          />
        </NavLink>

        {/* Desktop & Mobile Links */}
        <div className="hidden md:flex items-center space-x-8">
          {gooeyItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `relative text-gray-800 font-medium transition-all duration-300 hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center space-y-1.5 md:hidden focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile GooeyNav Menu */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-full left-0 bg-white/90 backdrop-blur-md shadow-lg z-40">
          <div style={{ height: "200px", position: "relative" }}>
            <GooeyNav
              items={gooeyItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
