import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Trending",
    "Popular",
    "Top Rated",
    "Upcoming",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-red-600 cursor-pointer">
            StreamFlix
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer text-gray-300 hover:text-white transition"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;