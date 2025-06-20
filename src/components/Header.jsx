import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';
import { getActiveColor } from '../utils/colors';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/blog', text: 'Blog' },
  { to: '/cve', text: 'CVE' },
  { to: '/tools', text: 'Tools' },
];

const Header = ({ colorMode, toggleColorMode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeColor = getActiveColor(colorMode);

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className='py-4 md:py-6 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 flex items-center justify-between'>
        {/* Branding & Color Mode (mobile) */}
        <div className='flex items-center gap-2'>
          <Link to='/' className='flex items-center space-x-2'>
            <span className={`text-${activeColor}-400 font-mono text-xl md:text-2xl select-none`}>
              clevrf0x
            </span>
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded transition-all duration-150 text-${activeColor}-400 hover:bg-gray-800/30 hover:text-white border border-transparent hover:border-${activeColor}-400/40 ${
                location.pathname === link.to ? 'bg-gray-800/30 text-white' : ''
              }`}>
              {link.text}
            </Link>
          ))}
        </nav>
        {/* Color Mode Toggle (desktop) */}
        <button
          onClick={toggleColorMode}
          className={`hidden md:flex p-2 rounded border border-${activeColor}-400/40 text-${activeColor}-400 hover:bg-${activeColor}-900/40 transition-all duration-200 ml-4`}
          title={`Switch Color Mode (Current: ${colorMode})`}>
          <Palette size={20} />
        </button>
        {/* Hamburger (mobile) */}
        <div className='md:hidden flex items-center gap-2'>
          <button
            onClick={toggleColorMode}
            className={`p-2 rounded border border-${activeColor}-400/40 text-${activeColor}-400 hover:bg-${activeColor}-900/40 transition-all duration-200`}
            title={`Switch Color Mode (Current: ${colorMode})`}>
            <Palette size={20} />
          </button>
          <button
            onClick={() => setMenuOpen(m => !m)}
            className={`ml-2 p-2 rounded border border-${activeColor}-400/40 text-${activeColor}-400 hover:bg-${activeColor}-900/40 transition-all duration-200 focus:outline-none`}
            aria-label='Open menu'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-gray-900/90 border-t border-gray-800 ${
          menuOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'
        }`}
        style={{ boxShadow: menuOpen ? '0 4px 24px 0 rgba(0,0,0,0.2)' : 'none' }}>
        <nav className='flex flex-col items-start gap-2 px-6'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`w-full px-2 py-2 rounded transition-all duration-150 text-${activeColor}-400 hover:bg-gray-800/30 hover:text-white border border-transparent hover:border-${activeColor}-400/40 ${
                location.pathname === link.to ? 'bg-gray-800/30 text-white' : ''
              }`}
              onClick={() => setMenuOpen(false)}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
