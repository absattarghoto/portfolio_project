import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#FFFFFF]">
              Infirix.io
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-[#FFFFFF] hover:text-[rgb(180,180,180)] px-3 py-2 text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[#ffffff] hover:text-[rgb(180,180,180)] px-3 py-2 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#FFFFFF] hover:text-[rgb(180,180,180)] px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#FFFFFF] hover:text-[rgb(180,180,180)] "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 h-[92vh]">
          <a
            href="#"
            className="text-[#FFFFFF] hover:text-[rgb(180,180,180)] block px-3 py-2 text-base font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] hover:text-[rgb(180,180,180)] block px-3 py-2 text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] hover:text-[rgb(180,180,180)] block px-3 py-2 text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
