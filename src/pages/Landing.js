import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// note this webapp is not responsive for mobile devices yet and i dont think will be even ever after, dont care really

const RoadmapSection = () => {
  const roadmapRef = useRef(null);

  const roadmapSteps = [
    {
      phase: "Phase 1",
      title: "Platform Foundation",
      description: "Smart contract development, wallet integration, and core infrastructure setup",
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Donation System",
      description: "Automated fund management, escrow contracts, and real-time tracking implementation",
      status: "in-progress"
    },
    {
      phase: "Phase 3",
      title: "NFT Integration",
      description: "Digital receipt NFTs with dynamic tracking capabilities",
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Impact Analytics",
      description: "AI-powered impact reports and progress dashboard",
      status: "upcoming"
    },
    {
      phase: "Phase 5",
      title: "Ecosystem Expansion",
      description: "Partnership integrations and cross-chain compatibility",
      status: "upcoming"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
     // same nebula as auth
      gsap.to(".roadmap-nebula", {
        scale: 1.2,
        opacity: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 4, from: "random" }
      });

      // Star twinkle effect
      gsap.to(".roadmap-star", {
        opacity: "random(0.2, 1)",
        scale: "random(0.8, 1.2)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: { amount: 5, from: "random" }
      });

      // roadmap beam
      gsap.to(".roadmap-beam-top", {
        left: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".roadmap-beam-right", {
        top: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".roadmap-beam-bottom", {
        right: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".roadmap-beam-left", {
        bottom: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      // roadmap glow
      gsap.to(".roadmap-beam-glow", {
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, roadmapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={roadmapRef} className="relative min-h-screen bg-[#080B1A] py-12 md:py-20 overflow-hidden">
      {/* same space as auth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F1631] via-[#080B1A] to-[#080B1A]">
        
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="roadmap-star absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        
        <motion.div 
          className="roadmap-nebula absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79,107,255,0.05) 0%, rgba(79,107,255,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div 
          className="roadmap-nebula absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,156,0.05) 0%, rgba(255,107,156,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-7xl text-white font-space-grotesk mb-3 sm:mb-4 font-bold">Project Roadmap</h2>
          <p className="text-white/60 font-quicksand text-sm sm:text-base">Our journey to revolutionize charitable giving</p>
        </motion.div>

       
        <div className="roadmap-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className="roadmap-item flex flex-col items-center"
              >
                
                <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full 
                  flex items-center justify-center z-10 mb-3 xs:mb-4 sm:mb-6
                  ${step.status === 'completed' ? 'bg-[#4F6BFF]' : 
                    step.status === 'in-progress' ? 'bg-[#4F6BFF]/50' : 'bg-[#4F6BFF]/20'}`}
                >
                  <span className="text-xs xs:text-sm text-white">{index + 1}</span>
                </div>

               
                <div className="relative group h-full w-full">
                  
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                   
                    <div className="absolute inset-0 bg-[#0A0F29]/40 backdrop-blur-sm" />
                    
                    
                    <div className="roadmap-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-[#4F6BFF] to-transparent" />
                    <div className="roadmap-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-[#4F6BFF] to-transparent" />
                    <div className="roadmap-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-[#4F6BFF] to-transparent" />
                    <div className="roadmap-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-[#4F6BFF] to-transparent" />
                    
                    
                    <div className="roadmap-beam-glow absolute inset-0 bg-[#4F6BFF]/5 rounded-xl opacity-0" />
                  </div>

                  
                  <div className="relative h-full p-4 xs:p-5 sm:p-6 flex flex-col">
                    <h3 className="text-[#4F6BFF] font-space-grotesk text-sm xs:text-base sm:text-lg mb-2">
                      {step.phase}
                    </h3>
                    <h4 className="text-white font-space-grotesk text-base xs:text-lg sm:text-xl mb-3">
                      {step.title}
                    </h4>
                    <p className="text-white/60 font-quicksand text-xs xs:text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BentoSection = () => {
  const bentoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animations (same as before)
      gsap.to(".bento-nebula", {
        scale: 1.2,
        opacity: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 4, from: "random" }
      });

      
      gsap.to(".border-beam-top", {
        left: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".border-beam-right", {
        top: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".border-beam-bottom", {
        right: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".border-beam-left", {
        bottom: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      
      gsap.to(".beam-glow", {
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Card reveal animation (same as before)
      gsap.from(".bento-item", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: {
          amount: 1.5,
          from: "random"
        },
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }, bentoRef);

    return () => ctx.revert();
  }, []);

  const bentoContent = [
    {
      title: "Smart Contract Security",
      description: "Military-grade encryption and automated auditing ensure your donations are secure and transparent. Real-time verification at every step of the process.",
      isLarge: true
    },
    {
      title: "Real-time Impact Tracking",
      description: "Watch your contributions make a difference with live impact metrics and transparent fund allocation.",
      isLarge: false
    },
    {
      title: "Automated Fund Distribution",
      description: "Smart contracts ensure automated, transparent, and efficient distribution of funds to verified causes.",
      isLarge: false
    },
    
  ];

  return (
    <div ref={bentoRef} className="relative min-h-screen bg-[#080B1A] py-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F1631] via-[#080B1A] to-[#080B1A]">
        
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="bento-star absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        
        <motion.div 
          className="bento-nebula absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79,107,255,0.05) 0%, rgba(79,107,255,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div 
          className="bento-nebula absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,156,0.05) 0%, rgba(255,107,156,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-white font-space-grotesk mb-4 font-bold">Platform Features</h2>
          <p className="text-white/60 font-quicksand">Discover what makes ImpactChain unique</p>
        </motion.div>

       
        <div className="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px]">
          
          <motion.div
            className="bento-item col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              // glassmorphism
              <div className="absolute inset-0 bg-[#0A0F29]/40 backdrop-blur-2xl" />
              
              
              <div className="border-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-[#4F6BFF] to-transparent" />
              <div className="border-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-[#4F6BFF] to-transparent" />
              <div className="border-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-[#4F6BFF] to-transparent" />
              <div className="border-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-[#4F6BFF] to-transparent" />
              
              
              <div className="beam-glow absolute inset-0 rounded-3xl border border-[#4F6BFF]/20 shadow-[inset_0_0_30px_rgba(79,107,255,0.2)]" />
              
              
              <div className="relative h-full p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  <div className="mb-8">
                    <motion.div
                      className="h-0.5 w-16 bg-gradient-to-r from-[#4F6BFF] to-[#FF4F9B]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <h3 className="text-4xl text-white font-space-grotesk mb-6">
                    {bentoContent[0].title}
                  </h3>
                  <p className="text-white/60 font-quicksand text-xl leading-relaxed">
                    {bentoContent[0].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          
          {bentoContent.slice(1).map((content, index) => (
            <motion.div
              key={index}
              className="bento-item relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                
                <div className="absolute inset-0 bg-[#0A0F29]/40 backdrop-blur-2xl" />
                
                
                <div className="border-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-[#4F6BFF] to-transparent" />
                <div className="border-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-[#4F6BFF] to-transparent" />
                <div className="border-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-[#4F6BFF] to-transparent" />
                <div className="border-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-[#4F6BFF] to-transparent" />
                
               
                <div className="beam-glow absolute inset-0 rounded-3xl border border-[#4F6BFF]/20 shadow-[inset_0_0_30px_rgba(79,107,255,0.2)]" />
                
                
                <div className="relative h-full p-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                  >
                    <div className="mb-6">
                      <motion.div
                        className="h-0.5 w-12 bg-gradient-to-r from-[#4F6BFF] to-[#FF4F9B]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <h3 className="text-2xl text-white font-space-grotesk mb-4">
                      {content.title}
                    </h3>
                    <p className="text-white/60 font-quicksand text-base leading-relaxed">
                      {content.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Nebula cloud effect
      gsap.to(".nebula", {
        scale: 1.2,
        opacity: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 4,
          from: "random"
        }
      });

     
      gsap.to(".star", {
        opacity: "random(0.2, 1)",
        scale: "random(0.8, 1.2)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          amount: 5,
          from: "random"
        }
      });

      
      gsap.from(".constellation-line", {
        scaleX: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        transformOrigin: "left"
      });

      // Text reveal animation
      const chars = textRef.current.querySelectorAll('.char');
      gsap.from(chars, {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      
      gsap.to(".hero-beam-top", {
        left: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".hero-beam-right", {
        top: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".hero-beam-bottom", {
        right: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

      gsap.to(".hero-beam-left", {
        bottom: "100%",
        duration: 2,
        ease: "none",
        repeat: -1
      });

     
      gsap.to(".hero-beam-glow", {
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      
      gsap.to(".hero-text-glow", {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      
      gsap.from(".hero-underline", {
        scaleX: 0,
        duration: 1.5,
        delay: 1.8, 
        ease: "power4.out",
        transformOrigin: "left center"
      });

    
      gsap.to(".hero-underline-glow", {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#080B1A] font-quicksand">
      <Navbar />

      
      <div ref={heroRef} className="relative min-h-screen overflow-hidden pt-8">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0F1631] via-[#080B1A] to-[#080B1A]">
          
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="star absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}

          
          <motion.div 
            className="nebula absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(79,107,255,0.05) 0%, rgba(79,107,255,0) 70%)',
              filter: 'blur(60px)',
            }}
          />
          <motion.div 
            className="nebula absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,107,156,0.05) 0%, rgba(255,107,156,0) 70%)',
              filter: 'blur(60px)',
            }}
          />

      
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="constellation-line absolute h-[1px] w-[200px]"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                background: 'linear-gradient(90deg, transparent, rgba(79,107,255,0.3), transparent)',
              }}
            />
          ))}

          
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-[#4F6BFF]/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 h-screen flex flex-col justify-center items-center">
          <motion.div 
            className="space-y-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#4F6BFF]/30" />
              <span className="text-[#4F6BFF]/70 font-space-grotesk tracking-[0.2em] uppercase text-sm">
                Blockchain-Powered Giving
              </span>
              <div className="h-[1px] w-12 bg-[#4F6BFF]/30" />
            </motion.div>

           
            <div ref={textRef} className="space-y-2 relative">
              
              <div className="absolute inset-0 blur-3xl opacity-30 hero-text-glow">
                <div className="h-full w-full bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF] to-[#4F6BFF]/0" />
              </div>

              <div className="overflow-hidden relative">
                <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] text-[#4F6BFF]/90 font-space-grotesk font-regular tracking-tight 
                             [text-shadow:_0_0_30px_rgba(79,107,255,0.3)]">
                  {'Transparent Donations'.split('').map((char, i) => (
                    <span key={i} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden relative">
                <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] text-white/90 font-space-grotesk font-bold tracking-tight 
                             [text-shadow:_0_0_30px_rgba(79,107,255,0.3)] mb-4">
                  {'for Real Impact'.split('').map((char, i) => (
                    <span key={i} className="char inline-block">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h1>
                
                <div className="relative h-2 mx-auto" style={{ width: '60%' }}>
                  
                  <div className="absolute inset-0 blur-md opacity-30 hero-underline-glow">
                    <div className="h-full w-full bg-gradient-to-r from-[#4F6BFF]/0 via-[#4F6BFF] to-[#4F6BFF]/0" />
                  </div>
                 
                  <div className="hero-underline absolute inset-0 bg-gradient-to-r from-[#4F6BFF] via-[#FF4F9B] to-[#4F6BFF] rounded-full" />
                </div>
              </div>
            </div>

            
            <motion.p 
              className="text-xl text-white/60 max-w-2xl font-quicksand leading-relaxed mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Experience a revolutionary approach where every donation is traceable, 
              transparent, and transformative. Watch your impact unfold in real-time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex items-center justify-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-[#4F6BFF]/10 rounded-lg overflow-hidden border border-[#4F6BFF]/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
               
                <div className="hero-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-[#4F6BFF] to-transparent" />
                <div className="hero-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-[#4F6BFF] to-transparent" />
                <div className="hero-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-[#4F6BFF] to-transparent" />
                <div className="hero-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-[#4F6BFF] to-transparent" />
                
                
                <div className="hero-beam-glow absolute inset-0 bg-[#4F6BFF]/5 rounded-lg opacity-0" />

                <span className="relative z-10 flex items-center gap-2 text-[#4F6BFF] font-space-grotesk">
                  Start Donating
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                className="relative px-8 py-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                
                <div className="hero-beam-top absolute top-0 left-0 w-[30%] h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
                <div className="hero-beam-right absolute top-0 right-0 w-[2px] h-[30%] bg-gradient-to-b from-white/30 to-transparent" />
                <div className="hero-beam-bottom absolute bottom-0 right-0 w-[30%] h-[2px] bg-gradient-to-l from-white/30 to-transparent" />
                <div className="hero-beam-left absolute bottom-0 left-0 w-[2px] h-[30%] bg-gradient-to-t from-white/30 to-transparent" />
                
                
                <div className="hero-beam-glow absolute inset-0 bg-[#0A0F29]/40 rounded-lg opacity-0" />

                <span className="relative z-10 text-white/70 font-space-grotesk hover:text-white transition-colors">
                  Learn More
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      
      <RoadmapSection />
      
      <BentoSection />
      <Footer />
    </div>
  );
};

export default Landing;