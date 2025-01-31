import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            Hi, I'm Deepesh Jaiswal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            DevOps Engineer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Seasoned DevOps Engineer with over 8 years of experience in automating and 
            architecting mission-critical 24×7 deployments, CI/CD pipelines, and cloud solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.button
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
            <motion.button
              className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Yellow Background Circle */}
            <motion.div 
              className="absolute inset-0 bg-yellow-400 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Profile Image Container */}
            <motion.div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform-gpu"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile Image */}
              <img
                src="./profile-photo.jpg"
                alt="Deepesh Jaiswal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Error loading image');
                  e.target.src = `data:image/svg+xml,${encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="#fbbf24"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="#1f2937" text-anchor="middle" dy=".3em">DJ</text></svg>'
                  )}`;
                }}
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-600 rounded-full opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
