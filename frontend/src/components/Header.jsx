import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaGlobe } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      hasDropdown: true,
      items: ['Claims Processing', 'Denial Management', 'Payment Posting', 'Multi-Specialty Billing']
    },
    {
      label: 'Healthcare Solutions',
      hasDropdown: true,
      items: ['Primary Care', 'Specialty Practices', 'Surgery Centers', 'Multi-Location Groups']
    },
    {
      label: 'Resources',
      hasDropdown: true,
      items: ['Blog', 'Case Studies', 'Webinars', 'Healthcare Insights']
    },
    { label: 'Pricing', hasDropdown: false },
    { label: 'About', hasDropdown: false }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-white">
              RevyHealth
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && <FaChevronDown className="text-xs" />}
                </button>
                
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent-green transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <FaGlobe className="text-sm" />
              <span className="text-sm">EN</span>
            </div>
            <a 
              href="https://calendly.com/revyhealth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-green hover:bg-accent-green-light text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-primary-800 rounded-lg mt-2 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <div key={index} className="px-4 py-2">
                <button className="w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                  {item.label}
                </button>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block py-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-4 border-t border-gray-600 mt-4">
              <a 
                href="https://calendly.com/revyhealth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-accent-green hover:bg-accent-green-light text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 text-center block"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;