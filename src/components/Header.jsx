import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Contact'];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (section) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl sm:text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            Deepesh Jaiswal
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={handleMenuToggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-4 pb-4">
                {menuItems.map((item) => (
                  <motion.li 
                    key={item}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="block cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => handleNavigation(item)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
