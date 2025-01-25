import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // nebula effect
      gsap.to(".auth-nebula", {
        scale: 1.2,
        opacity: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 4, from: "random" }
      });

     // star twinkle effect
      gsap.to(".auth-star", {
        opacity: "random(0.2, 1)",
        scale: "random(0.8, 1.2)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: { amount: 5, from: "random" }
      });

      // Constellation lines
      gsap.from(".auth-constellation-line", {
        scaleX: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        transformOrigin: "left"
      });

      // Beam animations with glow fir buttons and cards
      gsap.to(".auth-beam-top", {
        left: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".auth-beam-right", {
        top: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".auth-beam-bottom", {
        right: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".auth-beam-left", {
        bottom: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      
      gsap.to(".auth-beam-glow", {
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      
      gsap.to(".input-highlight", {
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, authRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={authRef} className="min-h-screen bg-[#080B1A] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F1631] via-[#080B1A] to-[#080B1A]">
        
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="auth-constellation-line absolute h-[1px] w-[200px]"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: 'linear-gradient(90deg, transparent, rgba(79,107,255,0.3), transparent)',
            }}
          />
        ))}

        // stars movement random
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="auth-star absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * 10 - 5],
              x: [0, Math.random() * 10 - 5],
              transition: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                yoyo: true,
                ease: "linear"
              }
            }}
          />
        ))}

        // gradient nebula
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="auth-nebula absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: i === 0 
                ? 'radial-gradient(circle, rgba(79,107,255,0.1) 0%, rgba(79,107,255,0) 70%)'
                : i === 1
                ? 'radial-gradient(circle, rgba(255,107,156,0.1) 0%, rgba(255,107,156,0) 70%)'
                : 'radial-gradient(circle, rgba(107,255,209,0.1) 0%, rgba(107,255,209,0) 70%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      
      <div className="relative w-full max-w-md">
       
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <SiHiveBlockchain className="text-[#4F6BFF] text-5xl relative z-10" />
            <div className="absolute inset-0 blur-xl bg-[#4F6BFF]/30 scale-150" />
          </div>
        </motion.div>

        
        <motion.div 
          className="relative bg-[#0A0F29]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
          <div className="auth-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-[#4F6BFF] to-transparent" />
          <div className="auth-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-[#4F6BFF] to-transparent" />
          <div className="auth-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-[#4F6BFF] to-transparent" />
          <div className="auth-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-[#4F6BFF] to-transparent" />
          
          
          <div className="auth-beam-glow absolute inset-0 bg-[#4F6BFF]/5 rounded-xl opacity-0" />

          
          <div className="flex mb-8 bg-[#0A0F29]/40 rounded-lg p-1 relative overflow-hidden">
            <div className="absolute inset-0 auth-beam-glow bg-[#4F6BFF]/5 opacity-0" />
            <button
              className={`flex-1 py-2 text-sm font-space-grotesk rounded-md transition-all duration-300 relative
                ${isLogin ? 'bg-[#4F6BFF] text-white shadow-lg shadow-[#4F6BFF]/20' : 'text-white/60 hover:text-white'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-sm font-space-grotesk rounded-md transition-all duration-300 relative
                ${!isLogin ? 'bg-[#4F6BFF] text-white shadow-lg shadow-[#4F6BFF]/20' : 'text-white/60 hover:text-white'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          
          <form ref={formRef} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-space-grotesk text-white/60 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                             text-white placeholder:text-white/30 font-quicksand
                             focus:outline-none focus:border-[#4F6BFF] transition-colors"
                    placeholder="Enter your email"
                  />
                  <div className="input-highlight absolute inset-0 bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF]/5 to-[#4F6BFF]/0 rounded-lg pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-space-grotesk text-white/60 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                             text-white placeholder:text-white/30 font-quicksand
                             focus:outline-none focus:border-[#4F6BFF] transition-colors"
                    placeholder="Enter your password"
                  />
                  <div className="input-highlight absolute inset-0 bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF]/5 to-[#4F6BFF]/0 rounded-lg pointer-events-none" />
                </div>
              </div>

              {!isLogin && (
                <div className="relative">
                  <label className="block text-sm font-space-grotesk text-white/60 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                               text-white placeholder:text-white/30 font-quicksand
                               focus:outline-none focus:border-[#4F6BFF] transition-colors"
                      placeholder="Confirm your password"
                    />
                    <div className="input-highlight absolute inset-0 bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF]/5 to-[#4F6BFF]/0 rounded-lg pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            
            <motion.button
              type="submit"
              className="relative w-full bg-[#4F6BFF] text-white font-space-grotesk py-3 rounded-lg
                       hover:bg-[#4F6BFF]/90 transition-colors overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{isLogin ? 'Sign In' : 'Create Account'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F6BFF] via-[#FF4F9B] to-[#4F6BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </form>

          
          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="px-4 text-white/40 text-sm font-quicksand">or continue with</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <FaGoogle className="text-lg" />, label: 'Google' },
              { icon: <FaGithub className="text-lg" />, label: 'GitHub' }
            ].map((social, index) => (
              <motion.button
                key={index}
                className="relative group flex items-center justify-center gap-2 py-3 px-4 
                         bg-white/5 border border-white/10 rounded-lg text-white/60 
                         hover:text-white font-space-grotesk text-sm transition-all
                         overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {social.icon}
                  {social.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF]/10 to-[#4F6BFF]/0 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth; 