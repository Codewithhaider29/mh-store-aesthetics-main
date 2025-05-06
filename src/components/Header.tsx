import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchDialog from './SearchDialog';
import Logo from './ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSpecialPage =
    ['/cart', '/account', '/products', '/categories', '/watches', '/earbuds', '/bags', '/neckbands', '/about', '/contact', '/faqs'].includes(location.pathname) ||
    location.pathname.startsWith('/product/') ||
    location.pathname.startsWith('/categories/');

  const textColor = isScrolled
    ? 'text-black'
    : isSpecialPage
    ? 'text-mh-black'
    : 'text-white';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <Logo className={textColor} />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              aria-label="Search"
              className={`${textColor} hover:text-mh-pink transition-colors`}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <Link to="/account" className={`${textColor} hover:text-mh-pink transition-colors`}>
              <User size={20} />
            </Link>
            <Link to="/cart" className={`${textColor} hover:text-mh-pink transition-colors`}>
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center space-x-8 mt-4 mr-28">
          <Link to="/" className={`${textColor} hover:text-mh-pink transition-colors`}>
            Home
          </Link>
          <Link to="/categories" className={`${textColor} hover:text-mh-pink transition-colors`}>
            Categories
          </Link>
          <Link to="/contact" className={`${textColor} hover:text-mh-pink transition-colors`}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-y-0 left-0 w-1/2 bg-white z-50 pt-10 px-4 shadow-lg"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 items-start mt-6">
              <Link to="/" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/categories" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
              <Link to="/contact" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} setOpen={setIsSearchOpen} />
    </motion.header>
  );
};

export default Header;
