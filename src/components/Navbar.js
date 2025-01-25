import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SiHiveBlockchain } from 'react-icons/si'; // blockchain logo from here
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
         // bc logo
          <motion.div 
            className="text-2xl text-white flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiHiveBlockchain className="text-white text-3xl sm:text-4xl" />
          </motion.div>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          
          <motion.div 
            className="hidden lg:flex items-center bg-[#0A0F29]/60 backdrop-blur-md rounded-full px-6 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink href="#home" active>Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <NavLink href="#transparency">Transparency</NavLink>
            <NavLink href="#ecosystem">Ecosystem</NavLink>
          </motion.div>

          
          <div className="hidden lg:flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className={`lg:hidden overflow-hidden bg-[#0A0F29]/95 backdrop-blur-lg rounded-2xl mt-2 ${isMenuOpen ? 'border border-white/10' : ''}`}
        >
          <div className="px-4 py-6 space-y-4">
           
            <div className="flex flex-col space-y-4">
              <NavLink href="#home" active>Home</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#resources">Resources</NavLink>
              <NavLink href="#transparency">Transparency</NavLink>
              <NavLink href="#ecosystem">Ecosystem</NavLink>
            </div>

            
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};


const NavLink = ({ href, children, active }) => (
  <motion.a
    href={href}
    className={`px-4 py-2 rounded-full transition-colors block text-center lg:inline-block ${
      active 
        ? 'bg-[#1A1F37] text-white' 
        : 'text-white/70 hover:text-white'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);


const socialLinks = [
  {
    name: 'Telegram',
    href: '#',
    icon: <FaTelegramPlane className="w-5 h-5" />
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <FaXTwitter className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    href: '#',
    icon: <FaGithub className="w-5 h-5" />
  },
  {
    name: 'Email',
    href: '#',
    icon: <HiMail className="w-[22px] h-[22px]" />
  },
];

export default Navbar;