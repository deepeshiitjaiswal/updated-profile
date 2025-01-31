import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-6">
              Seasoned DevOps Engineer with over 8 years of experience in automating and 
              architecting mission-critical 24×7 deployments, CI/CD pipelines, and cloud solutions. 
              Proficient in AWS, Azure, GCP, Kubernetes, Docker, Terraform, Pulumi, and Ansible.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Adept at infrastructure automation, configuration management, and deployment 
              management across Financial and Banking sectors. Skilled in source control tools (Git, 
              SVN), continuous integration (Jenkins), and container orchestration (Kubernetes).
            </p>
            <p className="text-lg leading-relaxed">
              Strong background in server administration (RedHat, Ubuntu, CentOS) and scripting 
              (Python, Bash, PowerShell). Proven ability to enhance workflow efficiency, implement 
              agile methodologies, and deliver high-quality outputs under tight deadlines.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</h3>
              <p className="text-gray-600 dark:text-gray-300">Cloud Platforms</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
