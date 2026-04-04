import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import emireqLogo from '../assets/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ['Marketplace', 'Tokenize', 'Investors', 'Events', 'About'];

  return (
    <nav className="bg-white border-b border-gray-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0">
            <img src={emireqLogo} alt="Emireq" className="h-8 sm:h-9" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[17px] font-medium text-text-dark hover:text-accent-yellow transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2.5 text-[16px] font-medium border border-gray-border rounded-full text-text-dark hover:bg-gray-50 transition-colors cursor-pointer">
              Startups
            </button>
            <button className="px-6 py-2.5 text-[16px] font-medium bg-primary text-white rounded-full hover:bg-primary-light transition-colors cursor-pointer">
              Investors
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-text-dark hover:text-accent-yellow transition-colors cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <button className="w-full px-5 py-2 text-sm font-medium border border-gray-border rounded-full text-text-dark hover:bg-gray-50 transition-colors cursor-pointer">
              Startups
            </button>
            <button className="w-full px-5 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-light transition-colors cursor-pointer">
              Investors
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
