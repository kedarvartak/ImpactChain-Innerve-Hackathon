import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      <Navbar /> 

      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-full blur-3xl"
      />

      {/* Main background pattern - Stationary */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Hero Content - Adjusted for Navbar */}
      <div className="relative z-10 pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl text-[#1e293b] mb-6">
                Transparent Donations
                <span className="text-[#3b82f6]"> for Real Impact</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#64748b] text-xl mb-12"
            >
              Experience the future of charitable giving with blockchain-powered transparency. 
              Track your donation's journey and witness your impact in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6"
            >
              <button className="px-8 py-4 rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/30">
                Start Donating
              </button>
              <button className="px-8 py-4 rounded-lg bg-white text-[#3b82f6] border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100">
                <div className="text-3xl text-[#3b82f6] mb-2">100%</div>
                <div className="text-[#64748b]">Transparent</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100">
                <div className="text-3xl text-[#3b82f6] mb-2">3-Stage</div>
                <div className="text-[#64748b]">Security</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100">
                <div className="text-3xl text-[#3b82f6] mb-2">Real-time</div>
                <div className="text-[#64748b]">Tracking</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;