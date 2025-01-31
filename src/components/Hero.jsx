import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Replace this URL with the actual path to your CV
    const cvUrl = '/Deepesh_Jaiswal_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Deepesh_Jaiswal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 mac-gradient opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mac-text-gradient">
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
                onClick={handleGetInTouch}
                className="mac-primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                className="mac-secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <motion.a
                href="#"
                className="text-2xl text-gray-600 hover:text-mac-blue dark:text-gray-400 dark:hover:text-mac-blue"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/deepesh-jaiswal-945a90160"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-mac-blue dark:text-gray-400 dark:hover:text-mac-blue"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className="text-2xl text-gray-600 hover:text-mac-blue dark:text-gray-400 dark:hover:text-mac-blue"
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
              {/* Decorative Elements */}
              <motion.div 
                className="absolute inset-0 rounded-full mac-gradient opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden mac-card border-4 border-white/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/profile-pic.png"
                  alt="Deepesh Jaiswal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading image');
                    e.target.src = `data:image/svg+xml,${encodeURIComponent(
                      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="#FFCC00"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="#1f2937" text-anchor="middle" dy=".3em">DJ</text></svg>'
                    )}`;
                  }}
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-mac-blue/30 backdrop-blur-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-mac-purple/30 backdrop-blur-xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
