import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.to(".footer-beam", {
        x: "100vw",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      
      gsap.to(".footer-glow", {
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      
      gsap.from(".footer-link", {
        y: 0, 
        opacity: 1, 
        duration: 0,
        stagger: 0
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const footerLinks = {
    'Get Started': [
      'Quick Start Guide',
      'Integration',
      'Documentation',
      'API Reference'
    ],
    'Technology': [
      'Blockchain',
      'Smart Contracts',
      'NFT Standards',
      'Security Measures'
    ],
    'Community': [
      'Discord Server',
      'Developer Forum',
      'GitHub',
      'Bug Bounty'
    ],
    'Resources': [
      'Whitepaper',
      'Token Economics',
      'Governance',
      'Research Papers'
    ]
  };

  return (
    <footer ref={footerRef} className="relative bg-[#080B1A] pt-16 sm:pt-20 overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F1631] via-[#080B1A] to-[#080B1A]">
        
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="footer-star absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-space-grotesk text-lg mb-4 sm:mb-6">{category}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="footer-link text-white/60 hover:text-[#4F6BFF] transition-all duration-300 block font-quicksand text-sm sm:text-base"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        <div className="border-t border-white/10 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-md text-center sm:text-left">
              <h3 className="text-white font-space-grotesk text-lg sm:text-xl mb-2">Join Our Network</h3>
              <p className="text-white/60 font-quicksand text-sm sm:text-base">Stay updated with the latest in blockchain philanthropy.</p>
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[300px] bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 
                         text-white text-sm sm:text-base placeholder:text-white/40
                         focus:outline-none focus:border-[#4F6BFF] transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-1 top-1 bg-[#4F6BFF] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 
                         text-white text-sm sm:text-base font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        
        <div className="relative border-t border-white/10 py-6 sm:py-8">
          
          <div className="footer-beam absolute top-0 left-0 w-[100px] h-[1px] bg-[#4F6BFF]" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white/40 font-quicksand text-xs sm:text-sm text-center sm:text-left"
            >
              © 2024 ImpactChain. Built during Innerve Hackathon.
            </motion.div>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              {['Twitter', 'Discord', 'GitHub', 'Docs'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-[#4F6BFF] transition-colors duration-300 
                           font-quicksand text-xs sm:text-sm"
                  whileHover={{ y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 