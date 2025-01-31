import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Lead DevOps Engineer",
    company: "Tietoevry",
    period: "2023-11 - Present",
    achievements: [
      "Successfully deployed docker-based applications on Kubernetes (EKS), resulting in 70% reduction in deployment time",
      "Refactored over 30 scripts in Shell and Python, optimizing cloud performance by 10%",
      "Developed scalable pipeline using Bitbucket, AWS Codebuild, and EKS",
      "Automated VPC, Subnet, Security Group, EC2, RDS, and EKS deployments using Terraform"
    ]
  },
  {
    title: "DevOps Expert",
    company: "EzopsInc",
    period: "2021-12 - 2023",
    achievements: [
      "Mastered OS-level virtualization and Docker implementation",
      "Configured SNS notifications for Autoscaling and Route-53",
      "Established private Docker registry for secure image storage",
      "Implemented Kubernetes in both physical and cloud environments"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Diverse Lynx",
    period: "2021-06 - 2021",
    achievements: [
      "Managed Kubernetes container orchestration systems",
      "Utilized Git and SVN for source control management",
      "Automated Docker components and created custom images",
      "Implemented CI/CD using Jenkins"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 sm:p-6 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base mb-1">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full transform translate-x-16 -translate-y-16 opacity-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
