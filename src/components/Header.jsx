import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette } from 'lucide-react';
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

  const activeColor = getActiveColor(colorMode);

  return (
    <header className='py-6 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <Link to='/' className='flex items-center space-x-2'>
            <span className={`text-${activeColor}-400 font-mono text-xl md:text-2xl select-none`}>
              clevrf0x
            </span>
          </Link>
          <button
            onClick={toggleColorMode}
            className={`p-2 rounded border border-${activeColor}-400/40 text-${activeColor}-400 hover:bg-${activeColor}-900/40 transition-all duration-200 md:hidden`}
            title={`Switch Color Mode (Current: ${colorMode})`}>
            <Palette size={20} />
          </button>
        </div>
        <div className='flex items-center gap-4'>
          <nav className='flex items-center space-x-6'>
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
          <button
            onClick={toggleColorMode}
            className={`hidden md:flex p-2 rounded border border-${activeColor}-400/40 text-${activeColor}-400 hover:bg-${activeColor}-900/40 transition-all duration-200`}
            title={`Switch Color Mode (Current: ${colorMode})`}>
            <Palette size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
